import React from 'react';
import Navbar from './Navbar';
import './Banner.css';

function Banner() {
    return (
        <header 
            className="main__banner" 
            style={{
                backgroundSize: "cover", 
                backgroundImage: "linear-gradient(lightblue, white)", 
                backgroundPosition: "center center",
                opacity: "0.9" }}>

            <Navbar />
   
            <div className="b__content">
                <div className="b__title">
                    <h2>Our Vision</h2>
                    <p>Communication barrier by personalised chat
Instant updates to volunteers
Sorting of volunteers based on their location, interests and availability 
Personalised portal for schools, NGO and individual volunteers
Automatic assigning of tasks to volunteers once approved</p>
                </div>
                <img src="Media/vector.png" className="banner__img" alt="" />
            </div>

            <div className="b__fadeBttm" ></div>
            
        </header>
    )
}

export default Banner
