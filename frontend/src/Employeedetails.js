import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
function Employeedetails()
{
    const [loading, setLoading] = useState(true);
    const [tokenStatus,setTokenStatus]=useState({})
    const [token,setToken]=useState(localStorage.getItem('token'));
    const [admintoken,setAdminToken]=useState(localStorage.getItem('adminToken'));
    const navigate=useNavigate()
    const [submission,setSubmissions]=useState([]);
    const {data}=useParams();
    useEffect(()=>{
        setToken(localStorage.getItem('token'))
        setAdminToken(localStorage.getItem('adminToken'));
       },[])
    const value=localStorage.getItem('token')||localStorage.getItem('adminToken');
    useEffect(()=>{
        if(!value) navigate('/form')
    axios.get("http://localhost:5000/verifytoken", {
            headers: {
                "x-token":value
            }
        }).then(async res => {
            const yaka = await res.data;
           console.log("hi",yaka);
           setTokenStatus(yaka)
           setLoading(false);
           
        }).catch( err => {
            console.error("Error verifying token:", err);
            setTokenStatus({...tokenStatus,expired:true})
            setLoading(false);
        });
       axios.get(`http://localhost:5000/getsubmissions/${data}`)
       .then(async res=>{
              const tempdata=await res.data;
              console.log(tempdata);
              setSubmissions(tempdata);    
       }) 
    },[])
    if(!loading){
        if(tokenStatus.expired===true){window.alert("Session Expired");localStorage.removeItem('token');navigate('/form');}
         if(!tokenStatus.expired&&!tokenStatus.username){window.alert("Invalid token");navigate('/form');}
         }
    return(
        <div className='container'>
            <div className='row p-4'></div>
         <div className='row'>
         {/* <div className='col-md-3'></div> */}
         <div className='col-md-12 text-center'>
         <span >
        {
            
            submission.map(eachsubmission=>(
                <ul id="mark">
                 <h4> {eachsubmission.date}</h4>
                 <h3> {eachsubmission.content} </h3>
                 <div className='row p-3'id="gap"><h1 className='row'></h1></div>
                </ul>
            ))
          
        }
          </span>
        </div>
        {/* <div className='col-md-3'></div> */}
        </div>
         </div>
         
    )
}
export  default Employeedetails;