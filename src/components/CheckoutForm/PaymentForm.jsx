import React, { useState, useEffect } from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Review from './Review';

const PaymentForm = () => {
    return (
        <div>
            Thông tin thanh toán
        </div>
    )
}

export default PaymentForm;