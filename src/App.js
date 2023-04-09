import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Typography } from "@material-ui/core";
import { Products, Navbar, Cart, Checkout } from './components';
import { commerce } from './lib/commerce';

import Layout from './components/Layout';
import Home from './routes/Home';
import Any from './routes/Any'; 

import useStyles from "./components/Products/styles";

const App = () => {
  const classes = useStyles(); 

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () => {
    const data = await commerce.cart.retrieve();
    setCart(data);
  }

  const handleAddToCart = async (productId, quantity) =>{
    const cart = await commerce.cart.add(productId, quantity);

    setCart(cart);
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const cart = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const cart = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const cart = await commerce.cart.empty();
    setCart(cart);
  };
  
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  
  return (
    <div>
      <Navbar totalItems={cart.total_items} />
      <Routes>
        <Route path="/" element=<Layout/> >
          <Route index element={<Home />} />
          <Route path="camnang" element={<Any routingPage="CẨM NANG KIẾN THỨC" routingLevel='1'/>} />
          <Route path='kt-phongthuy' element={<Any routingPage="KIẾN THỨC PHONG THỦY" />} />   
          <Route path='kt-phatgiao' element={<Any routingPage="KIẾN THỨC PHẬT GIÁO" />} />   
          <Route path='kt-trangsuc' element={<Any routingPage="KIẾN THỨC VỀ TRANG SỨC" />} />   
          <Route path='kt-tintuc' element={<Any routingPage="TIN TỨC" />} />   

          <Route path="saleoff" element={<Products routingLevel='1' routingName="SALE OFF" products={products} onAddToCart={handleAddToCart} />} />
          <Route exact path="product" element={<Products routingLevel='1' routingName="BỘ SƯU TẬP" products={products} onAddToCart={handleAddToCart}/>}/>
          <Route path="spmoi" element={<Products routingLevel='1' routingName="SẢN PHẨM MỚI" products={products} onAddToCart={handleAddToCart} />} />
          
          <Route path="trangsuc" element={<Products routingLevel='1' routingName="TRANG SỨC" products={products} onAddToCart={handleAddToCart} />} />
          <Route path="ts-nam" element={<Products routingName="TRANG SỨC BẠC THÁI NAM" products={products} onAddToCart={handleAddToCart} />} />
          <Route path="ts-nu" element={<Products routingName="TRANG SỨC BẠC THÁI NỮ" products={products} onAddToCart={handleAddToCart} />} />
          <Route path="ts-daquy" element={<Products routingName="TRANG SỨC ĐÁ QUÝ" products={products} onAddToCart={handleAddToCart} />} />
          <Route path="ts-bacta" element={<Products routingName="TRANG SỨC BẠC TA" products={products} onAddToCart={handleAddToCart} />} />
          
          <Route path="quatang" element={<Products routingLevel='1' routingName="QUÀ TẶNG" products={products} onAddToCart={handleAddToCart} />} />
          <Route path='qt-doanhnhan' element={<Products routingName="QUÀ TẶNG DOANH NHÂN" products={products} onAddToCart={handleAddToCart} />} />
          <Route path='qt-letet' element={<Products routingName="QUÀ TẶNG LỄ TẾT" products={products} onAddToCart={handleAddToCart} />} />
          <Route path='qt-tinhyeu' element={<Products routingName="QUÀ TẶNG TÌNH YÊU" products={products} onAddToCart={handleAddToCart} />} />

          <Route exact path="cart" element={
            <Cart 
              cart={cart} 
              handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} 
            />}/>
          <Route exact path="/checkout" element={<Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />}/>
          <Route path="*" element={
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <Typography className={classes.title} variant="h3" gutterBottom>
                Trang không tồn tại.<br /> <br /> 
                <a href='/'>Về trang chủ</a>
              </Typography>              
            </main >
        } />4
        </Route>
      </Routes>        
    </div>
  );
}

export default App;
