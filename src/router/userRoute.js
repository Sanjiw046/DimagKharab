
import express from 'express'
const router = express.Router();

import {postSignup} from '../controllers/userController.js';
console.log('hii in userrouter');

router.post('/signup',postSignup);

// router.post('/login',postLogin);

export default router;