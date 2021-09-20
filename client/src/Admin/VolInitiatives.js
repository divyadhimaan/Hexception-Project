import React, { useState } from 'react';
import BannerAdmin from './BannerAdmin';
import './SchoolRequests.css';

function VolInitiatives() {

    const [filterType, setFilterType] = useState('');


    function handleRequestFilter(e) {
        setFilterType(e.target.value);
        
    }
    

    return (
        <div className="sr">

            <BannerAdmin title="Assign their tasks" img="Media/volunteer-ini.png" />

            <div className="sr__container">
                <div className="sr__title">
                    <h2 >Volunteer Track</h2>
                    <div >
                            <select value={filterType} onChange={handleRequestFilter} placeholder="Filter by type of requests" name="interest" className="sr__dropdown">
                                <option >All</option>
                                <option >Location</option>
                                <option >Area of Interest</option>
                                <option >School Name</option>
                            </select>
                    </div>
                </div>

                <div className="sr__content">
                    <div className="sr__request">
                        <h2>Voulnteer Name</h2>
                        <p>School Name</p>
                        <button className="sr__request-btn" >View</button>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default VolInitiatives
