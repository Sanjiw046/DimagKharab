import express from 'express';
const app = express();
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const PORT = process.env.PORT;
import userRouter from './router/userRoute.js'

//If your frontend (e.g., http://localhost:3000) needs to interact with a backend (e.g., http://localhost:5000), CORS allows this interaction.
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//Parses incoming JSON payloads in requests and limits their size to 4kb.
app.use(bodyParser.json({limit:'4kb'}));

//Purpose: Parses incoming URL-encoded form data (e.g., from HTML forms) and limits its size to 4kb.
//To handle form submissions (application/x-www-form-urlencoded data).
app.use(bodyParser.urlencoded({extended:true,limit:'4kb'}));
//Serves static files (like HTML, CSS, JavaScript, images) from the public directory.
app.use(express.static('public'));

app.use(cookieParser());

app.use('/',userRouter); //router folder ko import marr rakha hai userRouter name se


mongoose.connect(`${process.env.DB_PATH}/${process.env.DB_NAME}`)
.then(()=>{
    console.log('connect successfully');
    app.listen(PORT,()=>{
        console.log(`http://localhost:`+PORT);
    })
})
.catch(err=>{
    console.log(err);
})
