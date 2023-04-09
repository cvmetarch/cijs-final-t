import React, { useState, useEffect } from 'react';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';

import { commerce } from '../../../lib/commerce';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import useStyles from './styles';

const steps = ['Địa chỉ nhận hàng', 'Thông tin thanh toán'];

const Checkout = ({ cart, onCaptureCheckout, order, error }) => {
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [activeStep, setActiveStep] = useState(0);
    const [shippingData, setShippingData] = useState({});
    const classes = useStyles();
    const navigate = useNavigate();

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    useEffect(() => {
        if (cart.id) {
            const generateToken = async () => {
                try {
                    const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });

                    setCheckoutToken(token);
                } catch {
                    if (activeStep !== steps.length) navigate('/');
                }
            };

            generateToken();
        }
    }, [cart]);

    const test = (data) => {
        setShippingData(data);
 
        nextStep();
    };

    let Confirmation = () => order.customer ? (
        <>
        <CssBaseline />
        <div>
            <Typography variant="h5">Cảm ơn bạn đã mua hàng, {order.customer.firstname} {order.customer.lastname}!</Typography>
            {/* { error && <Typography variant="subtitle2">Test mode Credit Card</Typography>} */}
            <Divider className={classes.divider} />
            <Typography variant="subtitle2">Mã đơn hàng: {order.customer_reference}</Typography>
            <Typography variant="subtitle2">Email xác nhận đơn hàng đã được gửi đến bạn!</Typography>
        </div>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">Về trang chủ</Button>
        </>
    ) : (
        <div className={classes.spinner}>
            <CircularProgress />
        </div>
    )
    
    const Form = () => (activeStep === 0
        ? <AddressForm checkoutToken={checkoutToken} nextStep={nextStep} test={test} />
        : <PaymentForm checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} shippingData={shippingData} onCaptureCheckout={onCaptureCheckout} />
        );

    return (
        <>
            <CssBaseline />
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Thanh toán</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
                </Paper>
            </main>
        </>
    );
};

export default Checkout;