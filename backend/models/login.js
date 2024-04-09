const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    }
})
module.exports=mongoose.model("Register",schema);