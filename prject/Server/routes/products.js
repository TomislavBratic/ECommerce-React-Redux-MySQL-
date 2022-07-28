import express from 'express';
import { deleteCart, getAllCart, insertCart } from '../controllers/cart.js';

import { getAllData, getProduct } from '../controllers/products.js';

const router = express.Router();

router.get('/', getAllData);
router.get('/:id', getProduct);
router.get('/cart/cart', getAllCart);
router.post('/cart/insert', insertCart);
router.delete('/cart/cart/:id', deleteCart);
export default router;