import React from "react";
import { AppBar, Toolbar, IconButton, Badge, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from 'react-router-dom';

import {Search} from '@material-ui/icons';

import { menuItemsList } from './menuItemsList';
import MenuItems from './MenuItems';

// import Navbarr from '../Navbarr.js';

import logo from "../../assets/commerce.png";
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>                    
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="45px" className={classes.image} />
                    </Typography> 

                    {/* <Navbarr /> */}
                    <nav>
                        <ul className="menus">
                            {menuItemsList.map((menu, index) => {
                                const depthLevel = 0;
                                return (
                                    <MenuItems items={menu} key={index} depthLevel={depthLevel} />
                                );
                            })}
                        </ul>
                    </nav>


                    <div className={classes.searchBox}>
                        <input style={{border: 0}} type="text" placeholder="Tìm kiếm..." />
                        <a href="/"><Search/></a>
                    </div>
                    <div className={classes.grow} />
                    {location.pathname !== '/cart' && (
                    <div className={classes.button}>

                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary" overlap="rectangular">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                    )}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;