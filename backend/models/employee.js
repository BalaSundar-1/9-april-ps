const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        
    },
    fullname:{
         type:String
    },
    phone:{
       type:String
    },
    address:{
        type:String
    },
     role:{
        type:String
    },
    image:{
      type:String
    }
})
module.exports=mongoose.model("employee",schema);