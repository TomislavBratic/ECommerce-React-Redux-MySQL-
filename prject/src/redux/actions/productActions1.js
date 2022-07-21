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
