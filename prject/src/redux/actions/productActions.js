import * as api from '../../api/axios.js';
import { ActionTypes } from '../constants/action-types.js';

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();
    
    dispatch({ type: ActionTypes.SET_PRODUCTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const getProduct = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchProduct(id);

    dispatch({ type: ActionTypes.GET_PRODUCT,payload: data });
  } catch (error) {
    console.log(error);
  }
  
};
