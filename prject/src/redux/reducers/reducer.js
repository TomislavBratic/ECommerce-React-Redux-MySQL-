import {  SET_PRODUCTS,GET_PRODUCT,REMOVE_SELECTED_PRODUCT, INSERT_CART} from '../constants/action-types';


export default (state = { isLoading: true, posts: [] }, action) => {
    switch (action.type) {
      case SET_PRODUCTS:
        return {
          ...state,
          posts: action.payload,
        };
        case INSERT_CART:
          return { 
            ...state,
            posts: [...state, action.payload]
        }
      case GET_PRODUCT:
        return { ...state, posts: action.payload};
      case REMOVE_SELECTED_PRODUCT:
        console.log(action.payload)
        return { ...state, posts: state.posts.filter((post) => post.id !== action.payload) };
      default:
        return state;
    }
  };