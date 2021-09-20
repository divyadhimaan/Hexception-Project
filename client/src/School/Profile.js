import React, { useState } from 'react';
import './Requests.css';
import axios from 'axios';

function Profile() {

    const [myReqs, setMyReqs] = useState([]);

    let email = localStorage.getItem("email");
        console.log(email);

        axios.post("http://localhost:8000/api/school/dashboard", {email: email})
                    .then(res => {setMyReqs(res.data[0]); console.log(res.data)} )
                    .catch(err=> console.log(err))

   

    return (
    <div className="req">
        <div className="req_box">           


            <div className="content">

                <h2 className="req_text">Profile</h2>

                    <h3 className="display">Name</h3>
                    <p className="input"  >
                        <div className="para">
                            {myReqs.schoolName}
                        </div>
                    </p>

                    <h3 className="display">School Id</h3>
                    <p className="input"  >
                        <div className="para">
                            {myReqs.schoolId}
                        </div>
                    </p>


                    <h3 className="display">Pincode</h3>
                    <p className="bigger"  >
                        <div className="para">
                            {myReqs.pincode}
                        </div>
                    </p>

                
            </div>

            
        </div>
        
</div>
)
}

export default Profile