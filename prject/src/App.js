
import './App.css';
import React, { Fragment } from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'; 
import Header from './containers/Header.js';
import ProductListing from './containers/ProductListing.js';
import ProductDetail from './containers/ProductDetail.js';
import ProductComponent from './containers/ProductComponent.js';
import Cart from './containers/Cart.js';
import About from './containers/About.js';
import CartListing from './containers/CartListing.js';
import Button from '@mui/material/Button';
import SignInSide from './containers/SignIn/SignIn';


function App() {
  return (

    <Router>
      <Header/>
  <Routes>
    <Route path="/signin" element={<SignInSide/>}/>
    
    <Route path="/" element={<ProductListing/>}/>
    <Route path="/product/:productId" element={<ProductDetail/>}/>
    <Route path="/" element={<ProductComponent/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/cart" element={<CartListing/>}/>

  </Routes>


    </Router>


   
  );
}

export default App;
