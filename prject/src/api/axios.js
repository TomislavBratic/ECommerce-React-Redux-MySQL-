import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000'});




export const fetchProducts= () => API.get('/products');
export const fetchProduct = (id) => (API.get(`/products/${id}`));
export const fetchAllCart = () => API.get('/products/cart/cart');
export const insertToCart = (product) => API.post(`/products/cart/insert`,product);
export const deleteCart = (id) => (API.delete(`/products/cart/cart/${id}`));

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);







