const mongoose = require('mongoose');
const mySchema=new mongoose.Schema({
    date:{
        type:String,
        required:true
    },
     username:{
        type:String,    
        required:true
    },
    content:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("Workdone",mySchema);