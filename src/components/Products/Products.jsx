import React from "react";
import Grid from '@material-ui/core/Grid';

import { Typography } from "@material-ui/core";

import Product from "./Product/Product";
import useStyles from "./styles";

const Products = ({ routingName, products, onAddToCart, routingLevel }) => {
    const classes = useStyles(); 

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Typography className={routingLevel === '1' ? classes.title : classes.title2} variant="h3" gutterBottom>
                {routingName}
            </Typography>
            <Grid container justifyContent="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )   
}

export default Products;