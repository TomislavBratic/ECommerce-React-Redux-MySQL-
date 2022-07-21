import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {  getProducts } from '../redux/actions/productActions1.js';



const Cart = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);


 
  return (
    
   <div className='cart'>
    <h1>Hello</h1>
    </div>
  
  );
};

export default Cart;
