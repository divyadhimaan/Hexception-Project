import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className = "navbar">

            <div className="navbar__title"> 
                <img src="Media/logo.png" alt="" className="nav__logo" />
                <Link to='/' className="nav__title" >
                    Way For Life
                </Link>               
                               
            </div>



            <div className="navbar__right"> 
            <a className="nav__ele" href='http://localhost:8000/fetch-data' ><h2>Resources</h2></a>     
                                             
                <Link className="nav__link" to='/admin-login'>
                    <h2>Login</h2>
                    <p>as Admin</p>
                </Link>

                <Link className="nav__link" to='/LoginSchool'>
                    <h2>Login</h2>
                    <p>as Organisation</p>
                </Link>
                <Link className="nav__link" to='/vol-login'>
                    <h2>Login</h2>
                    <p>as Volunteer</p>
                </Link>
                    
            </div>
        </div>
    );
};

export default Navbar;