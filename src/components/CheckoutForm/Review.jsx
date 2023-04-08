import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const Review = ({ checkoutToken }) => {
    return(
    <>
        <Typography variant="h6" gutterBottom>Tổng kết đơn hàng</Typography>
        <List disablePadding>
            {checkoutToken.line_items.map((product) => (
                <ListItem style={{ padding: '10px 0' }} key={product.name}>
                    <ListItemText primary={product.name} secondary={`Số lượng: ${product.quantity}`} />
                    <Typography variant="body2">{product.line_total.formatted}đ</Typography>
                </ListItem>
            ))}
            <ListItem style={{ padding: '10px 0' }}>
                <ListItemText primary="Tổng cộng" />
                <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                    {checkoutToken.subtotal.formatted}đ
                </Typography>
            </ListItem>
        </List>
    </>
)};

export default Review;