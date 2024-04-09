// import React,{ useEffect, useState } from "react"
// import axios from "axios";
// export  const usercontext=React.createContext();

// const useVerify = async () => {
// //   export  const usercontext=React.createContext();
//     const [temp, setTemp] = useState(null);
//     const value = localStorage.getItem('token');
    
//     useEffect(() => {
//         axios.get("http://localhost:5000/verifytoken", {
//             headers: {
//                 "x-token": value
//             }
//         }).then(async res => {
//             const yaka=await res.data;
            
//              setTemp(yaka);
//         }).catch(err => {
//             console.error("Error verifying token:", err);
//         });
//     }, []);
//    // console.log("lalalalla",temp);
//      return temp;
// }

// export default useVerify;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Verify = () => {
//     const [temp, setTemp] = useState(null);
//     const value = localStorage.getItem('token');
    
//     useEffect(() => {
//         axios.get("http://localhost:5000/verifytoken", {
//             headers: {
//                 "x-token": value
//             }
//         }).then(async res => {
//             const yaka = await res.data;
           
//             setTemp(yaka);
//         }).catch(err => {
//             console.error("Error verifying token:", err);
//         });
//     }, []);
    
//     return "namaste";
// }

// export default Verify;
import React, { useEffect, useState } from "react";
import axios from "axios";

const Verify = () => {
    const [temp, setTemp] = useState(null);
    const value = localStorage.getItem('token');
   
        axios.get("http://localhost:5000/verifytoken", {
            headers: {
                "x-token": value
            }
        }).then(async res => {
            const yaka = await res.data;
           
            setTemp(yaka);
        }).catch(err => {
            console.error("Error verifying token:", err);
        });
    
    
    return "namaste";
}

export default Verify;
