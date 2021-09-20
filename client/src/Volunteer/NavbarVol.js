import React from "react";
import "../Components/Navbar.css";
import { Link } from 'react-router-dom';

const NavbarVol = () => {

    return (
        <div className = "navbar">

            <div className="navbar__title"> 
                <img src="Media/logo.png" alt="" className="nav__logo" />
                <Link to='/vol-dashboard' className="nav__title" >
                    Way For Life
                </Link>               
                               
            </div>



            <div className="navbar__right">       
                        {/* {
                            loggedin ? <div>{navElement.map(element => (
                                <Link className="nav__link" to='/LoginSchool'>
                                    <h2>{element}</h2>
                                </Link>
                                                                                                     ))}
                            <Link className="nav__link" to='/LoginSchool'>
                                    <h2>Logout</h2>
                                </Link>
                            </div> : 
                            
                            
                            <div>
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
                        }                      */}
                
                {/* <Link className="nav__link" to='/admin-login'>
                     <h2>Login</h2>
                    <p>as Admin</p>
                </Link> */}

                <a className="nav__ele" href='http://localhost:8000/fetch-data' ><h2>Resources</h2></a>

                <Link className="nav__ele" to='/my-schools'>
                    <h2>School Events</h2>
                 </Link>
                                                                                    
                <Link className="nav__ele" to='/approved-req'>
                    <h2>Approved Requests</h2>
                 </Link>
                <Link className="schoolNav__link" to='/vol-login'>
                     <h2>Logout</h2>
                     {/* <p>as Volunteer</p> */}
                </Link>
            </div>
        </div>
    );
};

export default NavbarVol;