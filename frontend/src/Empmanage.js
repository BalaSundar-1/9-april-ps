import { useEffect, useState } from "react";
import axios from 'axios';
function Empmanage()
{
    const [temp,setTemp]=useState([])
     useEffect(()=>{
    axios.get("http://localhost:5000/getemployeedata")
   .then(async res=>{
       const buffer=await res.data;
      setTemp(buffer);
       console.log(buffer);
   })
     },[])
const [add,setAdd]=useState(
        {
            username:"",
            email:"",
           password:"1234",
          fullname:"",
          phone:"",
          address:"",
          role:"",
          image:""
        }
    );
function adduser(e)
    {
        e.preventDefault();
   const todo={
    username:add.username,
    email:add.email,
    id:new Date().toString(),
   }
   if((todo.email!=="" || todo.username!=="") && (todo.email.indexOf("@")!==-1))
   {
   setTemp([...temp,todo])
    console.log(todo.id)
    console.log(todo.email)
    }
    // if(todo.email==="" || todo.username==="")
    if((todo.email==="" || todo.username==="") || (todo.email.indexOf("@")===-1))
    {
     document.getElementById("ptag").innerHTML="Please Fill Valid Data"
    }
     if(todo.email!=="" && todo.username!=="")
    {
      axios.post("http://localhost:5000/addemployee",add).then(async res=>{
        const result=await res.data.msg;
        window.alert(result);
       })
    }
}
function del(username)
    {
        console.log(username);
      var x=window.prompt("Confirm username once")
       console.log("this is"+x);
      if(x===username)
      {
       axios.post("http://localhost:5000/deleteemployee",{username}).then(async res=>{
          const result=await res.data;
          window.alert(result);
       })
    }
    }
    return(
       <div className="container-fluid  p-5">
        <div className="row p-5"><h2 className="text-center">Manage your Employes</h2></div>
        <div className="row ">
            <div className="col-md-4 "></div>
            <div className="col-md-4 p-4"id="managepage" >
            <input className="form-control border-0 text-center bg-light"
          type="text"
          value={add.username}
          id="empid"
          placeholder="enter username"
          onChange={(e)=>{setAdd({...add,username:e.target.value})}}
          size='lg'
          />
          <div className="row p-3"></div>
           <input className="form-control border-0 text-center bg-light"
          type="email"
          value={add.email}
          id="empid"
          placeholder="enter email"
          onChange={(e)=>{setAdd({...add,email:e.target.value})}}
          />
            </div>
            <div className="col-md-2">
            {/* <button type="submit" className="btn btn-primary"onClick={getdata}>add</button> */}
            </div>
            <div className="col-md-2"></div>
        </div>
        <div className="row p-1"></div>
        <div className="row">
            <div className="col-md-5"></div>
            <div className="col-md-2"><div className="row p-2"><div className="col-md-5"></div><div className="col-md-2 "><button type="submit" className="btn btn-primary "onClick={adduser}>add</button>
            </div></div></div>
            <div className="col-md-5"></div>
        </div>
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4"><p className="text-center text-danger"id="ptag"></p></div>
            <div className="col-md-4"></div>
        </div>
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                {
                    temp.map((e)=>
                    {
                        const {username,id,email}=e;
                        return(
                        <div className="row p-3">
                          <h5 className='text-center text mdiv1 bg-light'>username: {username} </h5>
                          <h5 className='text-center text mdiv1 bg-light'>useremail:{email}</h5>
                          {/* <div className="row">
                          <h4  className=" col-md-12 bg-light">email:{email}</h4>
                          </div> */}
                          <div className="row"><div className="col-md-4"></div> <div className="col-md-2"><button type="submit" className="btn btn-success magaesubmit " onClick={()=>del(username)}>delete</button></div></div>
                           <div className="row"> <h1 className="text-center text mdiv1 bg-light"></h1></div>
                        </div>
                        ) 
                    })
                }
            </div>
            <div className=" col-md-4 "></div>
        </div>
       </div>
    )
}
export default Empmanage;