import Form from './Form';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import about1 from './images/about1.jpg';
import { useContext, useEffect, useState } from 'react';
import { store } from './App';
import axios from 'axios';
//import useVerify from './verify';
import Verify from './verify';

const p="phani is a sudent";
const currentDate = new Date();
const date = currentDate.getDate();
const month = currentDate.getMonth() + 1; // January is 0
const year = currentDate.getFullYear();
const formattedDate = year+"-"+ (month -1)+"-"+date; // Month is 0-based
function Done() {
  const [loading, setLoading] = useState(true);
  const [tokenStatus,setTokenStatus]=useState({})
  const navigate=useNavigate();
//  const token = localStorage.getItem('token');
 //if(!token) navigate('/form');
  const [id,setId]=useState('');
  const { data } = useParams(); 

const value = localStorage.getItem('token');
  useEffect(()=>{
    if(!value) navigate('/')
    axios.get("http://localhost:5000/verifytoken", {
            headers: {
                "x-token": value
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
    
        axios.get(`http://localhost:5000/form/${data}`)
        .then((res)=>{
          setId(res.data._id)
        //  console.log(res.data.image);
         
          setInfo({
            ...info,
            fullname:res.data.fullname,
            phone: res.data.phone,
            address: res.data.address,
            role:res.data.role,
           image:res.data.image
          });
          setEmail1(res.data.email);
          //console.log(res.data.fullname+" "+res.data.phone + " " + res.data.email + " " + res.data.address+" "+res.data.role+" "+res.data._id);
        })
  },[]) 
  console.log(tokenStatus);
  if(!loading){
 if(tokenStatus.expired===true){window.alert("Session Expired");localStorage.removeItem('token');navigate('/');}
  if(!tokenStatus.expired&&!tokenStatus.username){window.alert("Invalid token");navigate('/');}
  }
  const [info,setInfo]=useState({
   fullname:"",
    phone:"",
    address:"",
    role:"",
    image:""
  })
 const [file,setFile]=useState();
  const [email1, setEmail1] = useState("");
  const [edit,setEdit]=useState(true);
  const [textdata,settextData]=useState({
    date:formattedDate,
    username:data,
    content:""    //discription data

  })
  var todo="true";

  return (
    <div className='container-fluid donecolor'  style={{padding:"60px"}}>
      <div className='row '>
        <h3 className='text-center text'>Hello {info.fullname}</h3>
      </div>
      <div className="row">
        <div className="col-md-4 bg-light">
          <div className='row'>
            <div className='row p-3'></div>
            <div className="col-sm-3 bg-light text-light">col-sm</div>
            <div className="col-md-9 bg-light">
             <div className="card-title d-flex justify-content-center align-items-center">
             {/* { edit?<img src={about1} className="img-fluid rounded-circle" alt="Responsive image" style={{ width: '250px', height: '250px' }} />
               :<input type="file"></input>} */}
                { edit?<img src={`http://localhost:5000/images/${info.image}`} className="img-fluid rounded-circle" alt="Responsive image" style={{ width: '250px', height: '250px' }} />:<input type="file"  onChange={e=>{setFile(e.target.files[0]);console.log(file);}}/>}
              </div> 
            </div> 
          </div>
        </div>
        <div className="col-md-8 bg-light">
          <div className='row p-4'></div>
            <div className='row'>
                <div className='col-md-2 bg-light'></div>
                <div className='col-md-8'>

                
          {/* Content for col-8 */}
          {/* This is the content of col-8. */}
          <form>
  <div class="form-group row">
    <label for="staticmail" class="col-sm-2 col-form-label">Username</label>
    <div class="col-sm-10 p-2">
    <input type="text" class="form-control" id="staicmail" placeholder="email"value={data} readOnly="true" onChange={(e)=>{e.preventDefault()}}/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label" >Phoneno:</label>
    <div class="col-sm-10 p-2">
    <input type="number" name="phone" class="form-control" id="inputPassword" maxLength={"10"}readOnly={edit} placeholder="+91..." value={info.phone}  onChange={handleinfochange} />
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label"  >Email</label>
    <div class="col-sm-10 p-2">
      <input type="email" class="form-control" id="inputPassword"  value={email1} readOnly="true"  placeholder="thud@gamil.com"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label" >Adress</label>
    <div class="col-sm-10 p-2">
    <input type="text" name="address" class="form-control" id="inputPassword"  placeholder="5-13/A.." readOnly={edit}value={info.address} onChange={handleinfochange} />
    </div>
  </div>
  <div class="form-group row">
    {/* <label for="inputPassword" class="col-sm-2 col-form-label">Phoneno:</label> */}
    <div class="col-sm-10 p-2">
      {/* <input type="button" class="form-control" id="inputPassword"/> */}
      <button type="button" className="btn btn-primary btn-sm" onClick={actionChange}>{edit ? "Edit": "save"}</button>
    </div>
  </div>
 </form> 
         <div className='col-md-2 bg-light'></div>
        </div>
        </div>
            </div>

      </div>
      <div className='row'>
  <div className='col-md-4 bg-light'>
    <div className='row'>
      <div className='col-sm-2 bg-light'></div>
      <div className='col-sm-10 bg-light'>
        {/* Replace the h4 tag with an input element */}
        <input
          className="form-control border-0 text-center  bg-light"
          type="text"
           readOnly={edit}
          value={info.fullname}
          onChange={(e)=>{setInfo({...info,fullname:e.target.value})}}
         // onChange={(e)=>setFnr({...fnr,fullname:e.target.value})}
          border="0"
          
          // onChange={(e) => setData(e.target.value)}
        />
      </div>
    </div>
  </div>
  <div className='col-md-8 bg-light text-light'>
    
    jf
  </div>
</div>

      <div className='row'>
        <div className='col-md-4 bg-light'>
            <div className='row'>
        <div className='col-md-2 bg-light '></div>
        <div className='col-md-10 bg-light'>
        <input className="form-control border-0 text-center bg-light"
          type="text"
           readOnly={edit}
          value={info.role}
          onChange={(e)=>{setInfo({...info,role:e.target.value})}}
         
          border="0"/>
        </div>
        </div>
        </div>
        <div className='col-md-8 bg-light text-light'>n</div>
      </div>
  
      <div className='row pt-5 pt-5'>
        <div className='col-md-12 bg'>
            <div className='row'>
                <div className='col-md-2 bg-light text-light'>fd</div>
                <div className='col-md-8 bg-light'>
                <div class="form-group row">
        <div class="col-sm-10 p-5">
        <div className="row">
        <div className="col-md-12"id="donetextarea">
          <textarea className="form-control" rows="4" placeholder="Enter your today's work" value={textdata.content}onChange={texthandle}></textarea>
          {/* <button type="submit" className="btn btn-primary"onClick={handle}>Login</button> */}
        </div>
      </div>
    </div>
       </div>
                </div>
                <div className='col-md-2 bg-light text-light'>f</div>
                {/* <div className='col-md-2 bg-warning'>f</div> */}
            </div>
        </div>
      </div>
      <div className='row p-3'>
        <div className='col-md-5 bg-light text-light'>r</div>
        <div className='col-md-2 bg-light '>
        <button type="submit" className="btn btn-primary"onClick={handle}>submit</button> 
        </div>
        {/* <div className='col-md-2 bg-light text-light'>  <button type="submit" className="btn btn-success" id="mysubmisions" onClick={()=>navigate(`${data}/submissions`)}>my submissions</button> </div> */}
        <div className='col-md-2 bg-light'>
  <button type="submit" className="btn btn-primary" onClick={(e)=>{navigate(`submissions`)}}>submissions</button> 
  </div>
        <div className='col-md-3 bg-light'></div>
      </div>
    </div>
  );
  
  function texthandle(e)
  {
    settextData({...textdata,content:e.target.value})
  }
  function handle()
  {
  axios.post(`http://localhost:5000/form/${data}`,textdata)
  .then(res=>{
    console.log(res.data);
  })
  }
  function actionChange()
  {
    if(!edit){
      //console.log("see->"+id) role ph add fn
     const  formdata=new FormData()
  //   InputFields.append("myfile",data.profilePic,data.profilePic.name)

      formdata.append("fullname",info.fullname)
      formdata.append("phone",info.phone)
      formdata.append('address',info.address)
      formdata.append('role',info.role)
      formdata.append('file',file)
      console.log(formdata.get('file'));
      axios.put(`http://localhost:5000/savechanges/${id}`,formdata)
      .then(res=>{
           console.log(res.data);
      })
      window.location.reload();
    }
  
    setEdit(!edit);

  }
  
  function handleinfochange(e) {
      
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    });
  }
  
}

export default Done;