import React from 'react';
import NavbarAdmin from './NavbarVol';
import '../Components/Banner.css';

function BannerVol({title, img}) {
    return (
        <header 
            className="banner" 
            style={{
                backgroundSize: "cover", 
                backgroundImage: "linear-gradient(#ffe6b9, white)", 
                backgroundPosition: "center center",
                opacity: "0.9" }}>

            <NavbarAdmin />
   
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

export default BannerVol;