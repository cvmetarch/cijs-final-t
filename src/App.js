import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Products, Navbar, Cart} from './components';
import { commerce } from './lib/commerce';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () => {
    /*const data = await commerce.cart.refresh(); use when stuck at total item on cart*/
    const data = await commerce.cart.retrieve();
    setCart(data);
  }

  const handleAddToCart = async (productId, quantity) =>{
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  
  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Routes>
          <Route exact path="/" element={<Products products={products} onAddToCart={handleAddToCart}/>}/>       
          <Route exact path="/cart" element={<Cart cart={cart} />} />
        </Routes>        
      </div>
    </Router>
  );
}

export default App;
