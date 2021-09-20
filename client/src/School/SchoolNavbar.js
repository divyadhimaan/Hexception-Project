import React from "react";
import "../Components/Navbar";
import { Link } from 'react-router-dom';
import './SchoolNavbar.css';

const Navbar = () => {

    return (
        <div className = "navbar">

            <div className="navbar__title"> 
                <img src="Media/logo.png" alt="" className="nav__logo" />
                <Link to='/school-dashboard' className="nav__title" >
                    Way For Life
                </Link>               
                               
            </div>



            <div className="navbar__right"> 
            <a className="nav__ele" href='http://localhost:8000/fetch-data' ><h2>Resources</h2></a>    
                                             
                <Link className="nav__ele" to='/my-requests'>
                    <h2>My Requests</h2>
                </Link>

                <Link className="nav__ele" to='/school-profile'>
                    <h2>My Profile</h2>
                </Link>
                <Link className="schoolNav__link" to='/vol-login'>
                    <h2>Logout</h2>
                </Link>
                    
            </div>
        </div>
    );
};

export default Navbar;