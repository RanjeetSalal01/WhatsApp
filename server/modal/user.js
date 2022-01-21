import  Mongoose  from "mongoose";

const userschema=new Mongoose.Schema({

    googleId:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    givenName:{
        type:String,
        required:true
    },
})

const user= Mongoose.model('user',userschema)
export default user
