const mongoose = require("mongoose")
const config = require("config")



// const connectDB=()=>{
//     mongoose.connect(config.get("MONGO_URL"),{ useNewUrlParser: true , useUnifiedTopology:true})
//     .then(console.log('mongose is connected'))
//     .catch(err=>console.log(err))
// }

const connectDB=async ()=>{
    try{
        mongoose.connect(config.get("MONGO_URL"),
        { useNewUrlParser: true , useUnifiedTopology:true},
        ()=>console.log('mongoose is connected'))
    }
    catch (error){
        console.log(error)
    }
}

module.exports=connectDB