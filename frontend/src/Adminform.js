import { ComponentName } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

function Admin() {
  const [token,setToken]=useState(localStorage.getItem('adminToken'));
    const [admin,setAdmin]=useState(
        {
            username:"",
            password:"",
        }
      )
    //   function namehandlechange(e)
    // {
    //     e.preventDefault();
    //     setAdmin({...admin,
    //     username:e.target.value,
    //       password:e.target.value})
    //     console.log(admin)
    // }
    function handle(e)
    {
     e.preventDefault();
     axios.post("http://localhost:5000/adminloginform",admin).then(
        async (res)=>{
           const tempdata=await res.data;
           if(tempdata){
           localStorage.setItem('adminToken',tempdata)
          const fun=()=> setToken(tempdata);
         fun();
           console.log(token);
          //  if(tempdata==="true")
          //  navigate('/employes')
          //  else 
          //   window.alert("Invalid Crednetials");
         }
         else{
          window.alert("Invalid Credentials");
         }
        }
     )
    //  navigate(${admin.username});
   // navigate('/employes')
   //  console.log(admin)
    }
    const navigate=useNavigate();
    if(token){
      navigate('/employes');
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

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='text' value={admin.username}onChange={(e)=>{setAdmin({...admin,username:e.target.value})}} size="lg" />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password'value={admin.password}onChange={(e)=>{setAdmin({...admin,password:e.target.value})}}size="lg"/>
              <button type="button" className="btn btn-primary btn-sm"onClick={handle} >submit</button>
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

export default Admin;