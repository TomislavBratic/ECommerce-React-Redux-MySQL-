/*import { SET_PRODUCTS,GET_PRODUCT,REMOVE_SELECTED_PRODUCT } from "../constants/action-types.js";

const initialState = {
    products: [],
  };

export const productReducer=(state = initialState,{type,payload})=>{

    switch (type) {
        case SET_PRODUCTS:

            return {...state,products:payload};
    
        default:
            return state;
    }
};

    export const selectedProductReducer=(state={},{type,payload})=>{
       
        switch (type) {
            case GET_PRODUCT:
                
                return {...state,...payload};
        
            default:
                return state;
        }   

};

export const deleteProductReducer=(state={},{type,payload})=>{
    
    switch (type) {
        case REMOVE_SELECTED_PRODUCT:
            console.log("refresh")
            //state.filter((product) => product.id !== payload);
        
            return{...state,...payload};
    
        default:
            return state;
    }   

};



*/