

import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
    username:{
        type: String,
        lowercase: true,
        unique: true,
        trim: true,
        required: true
    },
    email:{
        type: String,
        lowercase: true,
        unique: true,
        trim: true,
        required: true
    },
    name:{
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    image:{
        type: String, //couldnary url
        required: true
    },
    orderHistory: [
        {
            date: {
                type: Date,
                default: Date.now
            },
            items: [
                {
                    name: String,
                    price: Number,
                    quantity: Number,
                    id:{
                        type: Schema.Types.ObjectId,
                        ref: "Food"
                    }
                }
            ]
        }
    ],
    password:{
        type: String,
        required: true
    },
    refreshToken:{
        type: String,
    },
},
{
    timestamps:true
})

const User = mongoose.model("User",userSchema);
export default User