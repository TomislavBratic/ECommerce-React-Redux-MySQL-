import * as api from '../../api/axios.js';
import {SET_PRODUCTS,INSERT_CART,REMOVE_SELECTED_PRODUCT  } from '../constants/action-types.js';

export const getCart = () => async (dispatch) => {
  try {
    const { data} =await api.fetchAllCart();
    console.log(data)
    dispatch({ type: SET_PRODUCTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};




export const insertCart= (product) => async (dispatch) => {
  console.log("insert")
  try {
    const { data } = await api.insertToCart(product);
    

    console.log("je")
    dispatch({ type: INSERT_CART, payload: data });
  } catch (error) {
    console.log(error);
  }

};

export const deleteCart = (id) => async (dispatch) => {

  try {
      await api.deleteCart(id);

    dispatch({ type:REMOVE_SELECTED_PRODUCT, payload: id })
    
  } catch (error) {
    console.log(error);
  }
};

