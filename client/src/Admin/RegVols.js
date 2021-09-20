import React, { useState } from 'react';
import BannerAdmin from './BannerAdmin';
import './SchoolRequests.css';

function RegVols() {

    const [filterType, setFilterType] = useState('');


    function handleRequestFilter(e) {
        setFilterType(e.target.value);
        
    }
    

    return (
        <div className="sr">

            <BannerAdmin title="Volunteer Details" img="Media/vol-register.png" />

            <div className="sr__container">
                <div className="sr__title">
                    <h2 >Registered Volunteers</h2>
                    <div >
                            <select value={filterType} onChange={handleRequestFilter} placeholder="Filter by type of requests" name="interest" className="sr__dropdown">
                                <option >All</option>
                                <option >Location</option>
                                <option >Area of Interest</option>
                                {/* <option >Training</option>
                                <option >Other</option> */}
                            </select>
                    </div>
                </div>

                <div className="sr__content">
                    <div className="sr__request">
                        <h2>Volunteer Name</h2>
                        <p>View Profile</p>
                        <div style={{display: "flex", alignSelf: "flex-end"}}>
                            <button className="sr__request-btn" style={{backgroundColor: "#b1d7a9"}} >Approve</button>
                            <button className="sr__request-btn" >Reject</button>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default RegVols