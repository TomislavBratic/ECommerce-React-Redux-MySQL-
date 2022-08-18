import * as api from '../../api/axios.js';
import { GET_PRODUCT,SET_PRODUCTS } from '../constants/action-types.js';

export const getProducts = () => async (dispatch) => {
  try {
  
    const { data } =await api.fetchProducts();
    console.log(data)
    
    dispatch({ type: SET_PRODUCTS, payload: data});
  } catch (error) {
    console.log(error);
  }
};


export const getProduct = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchProduct(id);

    dispatch({ type: GET_PRODUCT,payload: data });
  } catch (error) {
    console.log(error);
  }
  
};
