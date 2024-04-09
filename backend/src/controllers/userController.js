const Register=require('../../models/login');
const Employee=require('../../models/employee');
const Workdone=require('../../models/workdone');
const AdminLogin=require('../../models/adminlogin')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken');
const AddAdminLogin=async (req,res,next)=>{
     const {username,email,password}=req.body;
     try{
      const admin1=new AdminLogin({
        username,email,password
      })
      admin1.save();
      return res.send("admin added successful");
     }
     catch(err){
      console.log("exception at storig the admin1\n"+err);
     }
}
const AddUserData=async(req,res,next)=>{
   const {email,password}=req.body;
   const reg1=new Register({
    email,
    password
   })
   reg1.save();
   return res.send("basic Done");
}
const AddEmployee=async(req,res,next)=>{
    const {username,email,password,fullname,phone,address,role,image}=req.body;
    //console.log(req.body);
   const salt=await bcrypt.genSalt(10);
   const hashedPassword=await bcrypt.hash(password,salt);
   //console.log(hashedPassword);
    const newEmp=new Employee({
        username,
        email,
        password:hashedPassword,
        fullname,
        phone,
        address,
        role,
        image
    })
    try{
        newEmp.save();
    }
    catch(err){
        console.log("exception occured at saving new emplooye");
        return res.status(400).send("exception occured at saving new emplooye");
    }
    return res.status(200).json({msg:"added successfully"});
}
 const EmpLogin=async(req,res,next)=>{
        const {username,password}=req.body;
       
     let data=await Employee.findOne({username});
     let verifyPassword= bcrypt.compare(password,data.password)
     //console.log(verifyPassword);
     const payload={
      user:{
        id:data.id
      }
     }
        if(data&&verifyPassword)
        {
          const token= jwt.sign(payload,"jwtSecret",{expiresIn:5*100});
         // console.log(token);
            return res.status(200).json(token);}
        return res.status(200).json(null);
   
 }
 const AdminLoginForm=async(req,res)=>{
  const {username,password}=req.body;
   //  console.log(username+" "+password);
  let data=await AdminLogin.findOne({username});

     if(data&&req.body.password===data.password){
    const payload={
      user:{
        id:data.id
      }
     }
     const token= jwt.sign(payload,"jwtSecret",{expiresIn:5*100});     
     return res.status(200).json(token);
    //  return res.status(200).json("true");
     }
     return res.status(200).json(null);
}
const Addwork=async (req,res)=>{
    try{
    const {date,username,content}=req.body;
   // console.log(req.body.date)
   const addwork=new Workdone({
    date,
    username,
    content
    })
    //console.log(addwork.date)
    addwork.save();
   return res.status(200).json(addwork);
     }
   catch(err){
      console.log("error at saving the workdata\n"+err);
   }
  
}
const Getinfo = async (req, res) => {
    try {
      const username = req.params.id;
     // console.log(username);
      const [gotData] = await Employee.find({username:username});
    // console.log(gotData);
      return res.status(200).json(gotData); // Return the found object as JSON
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  const Savechanges=async(req,res)=>{
    //const _id=req.params.id;

    const id = req.params.id;
   
   const {phone,address,role,fullname}=req.body;
//    console.log(id+" "+address+" "+role+" "+fullname);
 //console.log(req.body);
 const image=req.file.filename;
 console.log(image);

    let emp;
    try{
        emp=await Employee.findByIdAndUpdate(id,{
            role,
           phone,
            address,
            fullname,
            image
        }) 
    
    return res.send("saved successful")
    }
   catch(err){console.log(err)}
 // return res.send("mood");
  }
  
  const GetEmployeeData=async(req,res,next)=>{
        try{
        const employee=await Employee.find();
       // console.log(employee);
        return res.send(employee)
        }
        catch(err){
         console.log(err)
        }
  }
  const GetSubmissions=async(req,res,next)=>{
       const data=req.params.id;
       console.log(data);
       const result=await Workdone.find({username:data});
       
       return res.send(result);
  }

  const DeleteEmployee=async (req,res)=>{
    const {username}=await req.body;
    const {id}=await Employee.findOne({username});
    try{
      if(id){
    await Employee.findByIdAndDelete(id);
    res.json("user deleted successfully");}
      else
      res.json("user not found");
   }
    catch(err){
      console.log(err);
    }
  }
exports.AddAdminLogin=AddAdminLogin;
exports.AddUserData = AddUserData;
exports.AddEmployee=AddEmployee;
exports.EmpLogin=EmpLogin;
exports.Addwork=Addwork;
exports.Getinfo=Getinfo;
exports.Savechanges=Savechanges;
exports.AdminLoginForm=AdminLoginForm;
exports.GetEmployeeData=GetEmployeeData;
exports.GetSubmissions=GetSubmissions;
exports.DeleteEmployee=DeleteEmployee;