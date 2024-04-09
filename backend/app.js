const express=require('express');
const mongoose =require('mongoose');
const cors=require('cors');
const bodyParser=require('body-parser');
const app=express();
const UserRouter=require('./src/routes/userRoutes');
app.use(bodyParser.json());
app.use(cors())
mongoose.connect("mongodb+srv://admin1:$uR9W7np7CHweL!@cluster0.k3tozbi.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{console.log("Db connected")})
.catch((err)=>console.log(err))
app.use(express.static('public'))
app.use('/',UserRouter);

app.listen(5000,()=>{
   console.log("App is running");
})