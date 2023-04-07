import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from 'react-router-dom';

import CardItem from "./CartItem/CartItem";
import useStyles from "./styles";

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const classes = useStyles();
    const EmptyCart = () => (
        <Typography variant="subtitle1">Giỏ hàng trống, 
            <Link className={classes.link} to="/"> hãy chọn một vài sản phẩm nhé!</Link>
        </Typography>
    );

    const FilledCart = () => (
        <>
        <Grid container spacing={3}>
            {cart.line_items.map((item) => (
                <Grid item xs={12} sm={4} key={item.id}>
                    <CardItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
                </Grid>
            )
            )}
        </Grid>
        <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {cart.subtotal.formatted}đ</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Xóa giỏ hàng</Button>
                    <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Thanh toán</Button>
                </div>
        </div>
        </>
    );

    if (!cart.line_items) return 'Loading...';

    return (
        <div>
            <Container>
                <div className={classes.toolbar} />
                <Typography className={classes.title} variant="h3" gutterBottom>
                    Giỏ hàng của bạn
                </Typography>
                { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
            </Container>
        </div>
    )
}

export default Cart;