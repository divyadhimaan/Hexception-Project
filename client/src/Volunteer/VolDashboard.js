import React from 'react'
import './VolDashboard.css'
import BannerAdmin from './BannerVol'
import { useState } from 'react';
import Footer from '../Components/Footer'



function VolDashboard() {

    const [filterType, setFilterType] = useState('');


    function handleRequestFilter(e) {
        setFilterType(e.target.value);
        
    }

    return (
        <div className="db">
            <BannerAdmin title="Volunteer  Dashboard" img="Media/volunteer.png" />
            <div className="sr__container">
                <div className="sr__title">
                    <h2 >My Events</h2>
                    <div >
                            <select value={filterType} onChange={handleRequestFilter} placeholder="Filter by type of requests" name="interest" className="sr__dropdown">
                                <option >All</option>
                                <option >Infrastructure</option>
                                <option >Teaching</option>
                                <option >Training</option>
                                <option >Other</option>
                            </select>
                    </div>
                </div>

                <div className="sr__content">
                    <div className="sr__request">
                        <h2>School Name</h2>
                        <p>Requirement Type</p>
                        <button className="sr__request-btn" >View</button>
                    </div>
                </div>
                
            </div>
            {/* <div className="main__container">
                <div className="main_title">
                    <div className="main__greeting">
                        <h4>All the School Requests for you are visible here.</h4>
                        <p>You can view all the requests here.</p>
                    </div>
                </div>
                <div className="sr__title">
                    <h2 >Requests from School Organisations</h2>
                    <div >
                            <select value={filterType} onChange={handleRequestFilter} placeholder="Filter by type of requests" name="interest" className="sr__dropdown">
                                <option >All</option>
                                <option >Infrastructure</option>
                                <option >Teaching</option>
                                <option >Training</option>
                                <option >Other</option>
                            </select>
                    </div>
                </div>
                
                <div>
                    <div className="sr__content">
                        <div className="sr__request">
                            <h2>School Name</h2>
                            <p>Requirement Type</p>
                            <button className="sr__request-btn" >View</button>
                        </div>
                    </div>
                </div>
            </div> */}
            <Footer />
        </div>
    )
}

export default VolDashboard;