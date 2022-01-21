import mongoose from 'mongoose'



const Connection = async() => {
    const URL = 'mongodb+srv://user:Max01@cluster0.hcgxg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true})
        console.log('database connected successfully')
    }catch(error){
        console.log("error while connecting to monogo db",error)
    }

}

export default Connection;