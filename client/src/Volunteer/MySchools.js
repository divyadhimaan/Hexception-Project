import React, { useState, useRef } from 'react';
import axios from 'axios';
import BannerVol from './BannerVol';

function MySchools() {

    const pinRef = useRef();
    const [schoolData, setSchoolData] = useState([]);




    function handlePin(e) {
        e.preventDefault();
        const pin =pinRef.current.value;

        axios.post("http://localhost:8000/volunter/filter", {pincode: pin})
                    .then(res => {setSchoolData(res.data)})
                    .catch(err=> console.log(err))
    }

        
            
           
    
    

    return (
        <div className="sr">

            <BannerVol title="Event Details" img="Media/school-reg.png" />

            <div className="sr__container">
                <div className="sr__title">
                    <h2 >Requests from School Organisations</h2>
                    <div style={{display: "flex"}} >
                            <input type="text" ref={pinRef} />
                            <button onClick={handlePin} style={{backgroundColor: "transparent", border: "2px solid #b94e4c"}}  >Search</button>
                    </div>
                    {/* <div >
                            <select value={filterType} onChange={handleRequestFilter} placeholder="Filter by type of requests" name="interest" className="sr__dropdown">
                                <option >Infrastructure</option>
                                <option >Teaching</option>
                                <option >Training</option>
                                <option >Other</option>
                            </select>
                    </div> */}
                </div>
                

                <div className="sr__content">
                {schoolData.map(req => {                    


                        
                        
                        return (
                            
                            <div className="sr__request">
                                <h2>{req.name}</h2>
                                <p>Email: {req.email}</p>
                                <p>Phone: {req.phone}</p>
                                <p>Address: {req.address}</p>
                                
                                <button className="sr__request-btn" >Apply</button>
                            </div>
                            
                        )

                    }  )                 
                    
                }
                </div>

                
                
            </div>
            
        </div>
    )
}

export default MySchools;