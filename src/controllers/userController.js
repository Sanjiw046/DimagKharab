import User from "../models/user.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import ErrorWrapper from "../utils/ErrorWrapper.js";

//ErrorWrapper ek function hai jisse utils folder me banaye hai, jiske ander hum apne function ko likh rhe hain, agar function koi error aayega to error k according o status code show karega and error ko
export const postSignup = ErrorWrapper(async function (req,res,next) {
        console.log("Request body:", req.body);
        console.log("Uploaded file:", req.file); 
        const {username,password,name,email} = req.body;
        //body k ander jo jo data-fields aa rahi hai usse array k form me store kar liya
        const incommingFields = Object.keys(req.body);
        const requireFields = ['username','password','name','email'];
        //then requireField pe filter function laga k check kar liya ki body kuch missing hai to usse missingField array me daal do
        const missingFields = requireFields.filter((field)=> !incommingFields.includes(field));
        // missingFields me ek bhi field huaa to error show karega
        if(missingFields.length > 0){
            //yaha array ko string me convert kar de rhe hain
            throw new ErrorHandler(401,`There are missing field ${missingFields.join(',')}  while signup`);
        }
        console.log(req.file);
        res.send('done');
    
})