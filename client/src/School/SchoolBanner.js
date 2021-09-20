import React from 'react';
import SchoolNavbar from './SchoolNavbar';
import '../Components/Banner';

function Banner({title, img}) {
    return (
        <header 
            className="banner" 
            style={{
                backgroundSize: "cover", 
                backgroundImage: "linear-gradient(lightblue, white)", 
                backgroundPosition: "center center",
                opacity: "0.9" }}>

            <SchoolNavbar />
   
            <div className="b__content">
                <div className="b__title">
                    <h2>{title}</h2>
                    {/* <p>I am a pleasure to share with you my new shot Neaxr - React Business Agency Template that got approved on Themeforest developed by the amazing React Team of ITechTheme</p> */}
                </div>
                <img src={img} className="banner__img" alt="" />
            </div>

            <div className="b__fadeBttm" ></div>
            
        </header>
    )
}

export default Banner