// import React, { useEffect, useState } from 'react';
// import Employeedata from './Employeedata';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { Link } from 'react-router-dom';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import axios from 'axios';

// function Employes() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredData, setFilteredData] = useState([]);
// //   const [Employeedata,setEmployeedata]=useState([]);
  
//   useEffect(()=>{
//  axios.get("http://localhost:5000/getemployeedata")
//    .then(async res=>{
//        const buffer=await res.data;
//       // setEmployeedata(buffer);
//        console.log(buffer);
//    })
// },[])
//   // Function to handle search input change
//   const handleSearchInputChange = event => {
//     setSearchQuery(event.target.value);
//     filterData(event.target.value);
//   };

//   // Function to filter data based on search query
//   const filterData = query => {
//     const filtered = Employeedata.filter(employee =>
//       employee.name.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredData(filtered);
//   };

//   return (
//     <>
//       <Row className='mainEmp'>
//         <div className='row bg-light'>
//           <div className='col-md-5'></div>
//           <div className='col-md-2 bg-light p-4'>
//             <input
//               type="search"
//               className='text-center'
//               placeholder='Search here'
//               onChange={handleSearchInputChange}
//             />
//           </div>
//           <div className='col-md-1 p-4'>
//             <button type="submit" className="btn btn-primary">Search</button>
//           </div>
//         </div>
//         {filteredData.length > 0 ? (
//           filteredData.map(employee => (
//             <Col key={employee.name} xs={12} sm={6} md={4} className='mb-4'>
//               <Link to={`/employes/${employee.id}`} className='p1 un'>
//                 <Card style={{ width: '18rem' }} id="o" className='enlarge-image  image-container' >
//                  <Card.Img variant="top" src={employee.photo} />
//                   <Card.Body>
//                     <Card.Text>
//                       <h4 className='text-center'>{employee.name}</h4>
//                     </Card.Text> 
//                   </Card.Body>
//                 </Card>
//               </Link>
//             </Col>
//           ))
//         ) : (
//           Employeedata.map(employee => (
//             <Col key={employee.name} xs={12} sm={6} md={4} className='mb-4'>
//               <Link to={`/employes/${employee.id}`} className='p1 un'>
//                 <Card style={{ width: '18rem' }} id="o" className='enlarge-image  image-container' >
//                   <Card.Img variant="top" src={employee.photo} />
//                   <Card.Body>
//                     <Card.Text>
//                       <h4 className='text-center'>{employee.name}</h4>
//                     </Card.Text> 
//                   </Card.Body>
//                 </Card>
//               </Link>
//             </Col>
//           ))
//         )}
//       </Row>
//     </>
//   )
// }

// export default Employes;




import React, { useEffect, useState} from 'react';
//import Employeedata from './Employeedata';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
function Employes() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [Employeedata,setEmployeedata]=useState([]);
  const [loading, setLoading] = useState(true);
  const [tokenStatus,setTokenStatus]=useState({})
  const navigate=useNavigate();
  const value=localStorage.getItem('adminToken');
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
 axios.get("http://localhost:5000/getemployeedata")
   .then(async res=>{
       const buffer=await res.data;
      setEmployeedata(buffer);
       console.log(buffer);
   })
},[])
if(!loading){
  if(tokenStatus.expired===true){window.alert("Session Expired");localStorage.removeItem('token');navigate('/');}
   if(!tokenStatus.expired&&!tokenStatus.username){window.alert("Invalid token");navigate('/');}
   }
  // Function to handle search input change
  const handleSearchInputChange = event => {
    setSearchQuery(event.target.value);
    filterData(event.target.value);
  };

  // Function to filter data based on search query
  const filterData = query => {
    const filtered = Employeedata.filter(employee =>
      employee.username.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <Row className='mainEmp' style={{padding:"60px"}}>
        <div className='row bg-light'>
          <div className='col-md-5'></div>
          <div className='col-md-2 bg-light p-4 '>
            <input
              type="search"
              className='text-center'
              placeholder='Search here'
              onChange={handleSearchInputChange}
            />
          </div>
          <div className='col-md-1 p-4'>
            <button type="submit" className="btn btn-primary">Search</button>
          </div>
          <div className='col-md-2'></div>
          {/* <div className='row'></div> */}
          <div className='col-md-2 p-4'><button type="submit" className="btn btn-primary" onClick={()=>{navigate('/empmanage')}}>Manage emp</button></div>
        </div>
        {filteredData.length > 0 ? (
          filteredData.map(employee => (
            <Col key={employee.username} xs={12} sm={6} md={4} className='mb-4'>
              <Link to={`/employes/${employee.username}`} className='p1 un'>
                <Card style={{ width: '18rem' }} id="o" className='enlarge-image  image-container' >
                  <Card.Img variant="top" src={`http://localhost:5000/images/${employee.image}`} />
                  <Card.Body>
                    <Card.Text>
                      <h4 className='text-center'>{employee.fullname}</h4>
                    </Card.Text> 
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))
        ) : (
          Employeedata.map(employee => (
            <Col key={employee.username} xs={12} sm={6} md={4} className='mb-4'>
              <Link to={`/employes/${employee.username}`} className='p1 un'>
                <Card style={{ width: '18rem' }} id="o" className='enlarge-image  image-container' >
                  <Card.Img variant="top" src={`http://localhost:5000/images/${employee.image}`} />
                  <Card.Body>
                    <Card.Text>
                      <h4 className='text-center'>{employee.username}</h4>
                    </Card.Text> 
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))
        )}
      </Row>
    </>
  )
}

export default Employes;
