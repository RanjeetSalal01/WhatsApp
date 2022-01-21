
import user from "../modal/user.js"

export const addUser=async(request ,response)=>{
  try{

    let exist = await user.findOne({googleId:request.body.googleId})
    if(exist){
      response.status(200).json('user already exist')
      return
    }

    console.log(request.body)
    const newuser= new user(request.body);
    await newuser.save();
    response.status(200).json("user saved successfully")
}catch(error){
    response.status(500).json(error);
}
}

export const getUsers=async(request ,response)=>{

    try{
       const users= await user.find({});
       response.status(200).json(users)
    }catch(error){
      response.status(500).json(error);
    }
}