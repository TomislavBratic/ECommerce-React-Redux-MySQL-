import express from 'express';
import { signIn,signUp } from '../controllers/user.js';

const router = express.Router();


router.get('/signIn', signIn);
router.get('/signUp', signUp);

export default router;