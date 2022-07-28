import { ActionTypes } from "../constants/action-types";

const intialState = {
    products: [],
  };

export const productReducer=(state = intialState,{type,payload})=>{

    switch (type) {
        case ActionTypes.SET_PRODUCTS:

            return {...state,products:payload};
    
        default:
            return state;
    }
};

    export const selectedProductReducer=(state=[],{type,payload})=>{
       
        switch (type) {
            case ActionTypes.GET_PRODUCT:
                
                return {...state,...payload};
        
            default:
                return state;
        }   

};

export const deleteProductReducer=(state=[],{type,payload})=>{
       
    switch (type) {
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            
            return state.filter((product) => product.id !== payload);
    
        default:
            return state;
    }   

};



