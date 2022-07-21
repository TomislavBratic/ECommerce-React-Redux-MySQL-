import { ActionTypes } from "../constants/action-types"
import * as api from '../../api/axios.js';

export const setProducts=(products)=>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    };
};

export const selectedProduct=(product)=>{
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product,
    };
};