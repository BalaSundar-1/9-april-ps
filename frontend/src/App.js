import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import About from './About';
import Gallary from './Gallary';
import Form from './Form';
import Done from './Done';
import Adminform from './Adminform';
import Done2 from './Done2';
import Employeedetails from './Employeedetails';
import Employes from './Employes';
import { BrowserRouter,Route,Routes,Router } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Empmanage from './Empmanage';
export const store=React.createContext();
function App() {   
//  const [token,setToken]=useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(()=>{
   // console.log("app"+token);
  },[token]);
 // console.log("app"+token);
  return (
    <>
    <store.Provider value={[token,setToken]}>
    <BrowserRouter>
    <Menu/>
      <Routes>
       <Route path="/gallery"element={<Gallary/>}/>
       <Route path="/employes"element={<Employes/>}/>
       <Route path="form/:data/submissions"element={<Employeedetails/>}/>
       <Route path="/employes/:data"element={<Employeedetails/>}/>
       <Route path="/form"element={<Form/>}/>
       <Route path="/done"element={<Done/>}/>
       <Route path="/"element={<About/>}/>
       <Route path="/adminform"element={<Adminform/>}/>
       <Route path="/form/:data"element={<Done/>}/>
       <Route path="/done2"element={<Done2/>}/>
       <Route path="/adminform"element={<Done2/>}/>
       <Route path="/empmanage" element={<Empmanage/>}/>
      </Routes>
     </BrowserRouter>
     </store.Provider>
    </>
  );
}

export default App;
