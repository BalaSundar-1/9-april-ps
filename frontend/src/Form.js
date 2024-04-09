
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ComponentName } from 'mdb-react-ui-kit';
import axios from 'axios'

// import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';

function Form() {
    const [token,setToken]=useState(localStorage.getItem('token'));
        useEffect(()=>{
            setToken(localStorage.getItem('token'));
        },[])
        const [data, setData] = useState({
            username: "",
            password: ""
        });
        
        const navigate = useNavigate();
         // console.log("this is token"+token);
        function handleSubmit(e) {
            e.preventDefault();
       //  console.log("this is token"+token+"\n");
    
            axios.post("http://localhost:5000/form",data).then(
               async (res)=>{
                  const result=await res.data;
                  
                  if(result)
                  {
                    localStorage.setItem("token",result);
                    setToken(result);
    
                    console.log("this is token"+token+"\n");
                //navigate(`${data.username}`);
                  }
                  else 
                window.alert("Invalid Crednetials");
                }
            )
            //navigate(${data.username});
           // console.log(data);
        }
    if(token){
        navigate(`${data.username}`);
        window.location.reload();
    }
        
  return (
    <MDBContainer fluid id="formbackground">

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <div className='row p-4'></div>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px',}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='text' value={data.username}onChange={(e)=>{setData({...data,username:e.target.value})}} size="lg" />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password'value={data.password}onChange={(e)=>{setData({...data,password:e.target.value})}}size="lg"/>
              <button type="button" className="btn btn-primary btn-sm"onClick={handleSubmit} >submit</button>
              <div className='row p-3'></div>
              <p className="small mb-3 pb-lg-2"><a class="text-white-50 p-3" href="#!">Forgot password?</a></p>
              <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>
                Login
              </MDBBtn>

              <div className='d-flex flex-row mt-3 mb-5'>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='facebook-f' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='twitter' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='google' size="lg"/>
                </MDBBtn>
              </div>

              <div>
                <p className="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>

              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Form;