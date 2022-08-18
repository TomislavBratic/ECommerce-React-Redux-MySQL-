import * as api from '../../api/axios.js';
import { AUTH} from '../constants/action-types.js';


export const signin = (formData, router) => async (dispatch) => {
    console.log("auth")
    try {
      const { data } = await api.signIn(formData);
  
      dispatch({ type: AUTH, data });
  
      router.push('/cart');
    } catch (error) {
      console.log(error);
    }
  };
  
  export const signup = (formData, router) => async (dispatch) => {
    console.log("auth")
    try {
      const { data } = await api.signUp(formData);
  
      dispatch({ type: AUTH, data });
  
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };
