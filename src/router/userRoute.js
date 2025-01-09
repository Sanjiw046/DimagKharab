
import express from 'express'
const router = express.Router();
import upload from '../utils/multer.js';

import {postSignup} from '../controllers/userController.js';

//upload.single('image')  iska use hum single file ko upload karne me karte hai, image isliye kyuki db me bhi same name hai, jab postman se data k sath image bhejte hai to form kthrough bhejte hain
router.post('/signup',upload.single('image'),postSignup);

// router.post('/login',postLogin);

export default router;