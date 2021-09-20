import React, { useState } from 'react';
import '../Admin/SchoolRequests.css';
import SchoolBanner from './SchoolBanner';
import axios from 'axios';

function MyRequests() {

    const [myReqs, setMyReqs] = useState([]);
    //const [schoolId, setSchoolId] = useState('');


   

    function handleShow(e) {
        e.preventDefault();
        let email = localStorage.getItem("email");
        console.log(email);

        axios.post("http://localhost:8000/api/school/dashboard", {email: email})
                    .then(res => {setMyReqs(res.data); console.log(res.data)} )
                    .catch(err=> console.log(err))

        
        // axios.post("http://localhost:8000/getQuery", {schoolId: schoolId})
        //                 .then(res => {setMyReqs(res.data); console.log(res.data)})
        //                 .catch(err=> console.log(err))
        
    }        
            
            
    

    return (
        <div className="sr">

            <SchoolBanner title="Keep tabs on your Request proposals" img="Media/req.png" />

            <div className="sr__container">
                <div className="sr__title">
                    <h2 >My Requests</h2>
                    <button onClick={handleShow}  style={{backgroundColor: "transparent", border: "2px solid #b94e4c"}}>Show My Requests</button>
                    
                </div>

                <div className="sr__content">
                {myReqs.map(req => {

                    
                        return (
                        
                        <div className="sr__request">
                            <h2>{req.queryType}</h2>
                            <p style={{color: "red"}}>{req.status}</p>
                            
                            <button className="sr__request-btn" >View</button>
                        </div>
                        
                    )
                    

                    
                })}
                </div>

                
                
            </div>
            
        </div>
    )
}

export default MyRequests;