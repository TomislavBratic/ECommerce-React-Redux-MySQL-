import * as api from '../../api/axios.js';
import { ActionTypes } from '../constants/action-types.js';

export const getCart = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllCart();
    
    dispatch({ type: ActionTypes.SET_PRODUCTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};




export const insertCart= (product) => async (dispatch) => {
  try {
    const { data } = await api.insertToCart(product);
    

    console.log("je")
    dispatch({ type: ActionTypes.INSERT_CART, payload: data });
  } catch (error) {
    console.log(error);
  }

};

export const deleteCart = (id) => async (dispatch) => {
  try {
     await await api.deleteCart(id);

    dispatch({ type: ActionTypes.REMOVE_SELECTED_PRODUCT, payload: id })
    
  } catch (error) {
    console.log(error);
  }
};

