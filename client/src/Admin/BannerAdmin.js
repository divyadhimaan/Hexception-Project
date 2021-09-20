import React from 'react';
import NavbarAdmin from './NavbarAdmin';
import '../Components/Banner.css';

function BannerAdmin({title, img}) {
    return (
        <header 
            className="banner" 
            style={{
                backgroundSize: "cover", 
                backgroundImage: "linear-gradient(#97f9e3, white)", 
                backgroundPosition: "center center",
                opacity: "0.9" }}>

            <NavbarAdmin />
   
            <div className="b__content">
                <div className="b__title">
                    <h2 style={{color: "#fd8b78"}}>{title}</h2>
                    {/* <p>I am a pleasure to share with you my new shot Neaxr - React Business Agency Template that got approved on Themeforest developed by the amazing React Team of ITechTheme</p> */}
                </div>
                <img src={img} className="banner__img" alt="" />
            </div>

            <div className="b__fadeBttm" ></div>
            
        </header>
    )
}

export default BannerAdmin;