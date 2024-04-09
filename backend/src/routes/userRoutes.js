const express=require('express');
const Router=express.Router();
const UserController=require('../controllers/userController');
const upload=require('../middleware/upload');
const  jwtVerify  = require('../middleware/jwtverify');
 


Router.post('/adddata',UserController.AddUserData);
 Router.post("/addemployee",UserController.AddEmployee)
 Router.post("/form",UserController.EmpLogin)
 Router.post('/form/:id',UserController.Addwork)
 Router.get('/form/:id',UserController.Getinfo)
 Router.put('/savechanges/:id',upload.single('file'),UserController.Savechanges);
 Router.post('/adminlogin',UserController.AddAdminLogin)
 Router.post('/adminloginform',UserController.AdminLoginForm)
 Router.get('/getemployeedata',UserController.GetEmployeeData)
 Router.get('/getsubmissions/:id',UserController.GetSubmissions);
 Router.post('/deleteemployee',UserController.DeleteEmployee);
 Router.get('/verifytoken',jwtVerify);
module.exports=Router;