const jwt=require('jsonwebtoken');
const Employee = require('../../models/employee');
const adminlogin = require('../../models/adminlogin');

const jwtVerify=async (req,res,next)=>{
   const token=await req.header("x-token");
    
   // console.log(token);
    try{
          const {user}=await jwt.verify(token,"jwtSecret");
          let id=user.id;
         
          let temp=await Employee.findOne({_id:id}).select({password:0})||await adminlogin.findOne({_id:id}).select({password:0});
          console.log(temp);
          if(temp.username)
         return res.status(200).json({ expired:false,username:temp.username});
        else return res.status(200).json({ expired:false,username:null});
    }
    catch (err) {
        // If the token is expired, send a specific response to the frontend
       
        if (err.name === 'TokenExpiredError') {
           return res.status(401).json({ expired: true,username:null});
        } else {
           return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
module.exports=jwtVerify;
