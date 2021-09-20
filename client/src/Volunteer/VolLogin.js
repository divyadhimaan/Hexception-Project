import React from 'react';
import './VolLogin.css';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

function VolLogin() {

    const emailRef = useRef();
    const passwordRef = useRef();



    const handleSubmit = (e) => {
        e.preventDefault();
        const vloginData = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        console.log(vloginData);
    }


    return (
        <div className="vsignup">
            <Link to="/" style={{position: "absolute"}} >
                <img src="Media/logo.png" alt="" className="vsignup__logo" />
            </Link>
            
            <div className="vlogin__container">

                <div className="vsignup__img">
                    
                </div>


                <div className="vlogin__content">
                    
                    <h2>Login</h2>
                    <p>Need an account? <Link to='/vol-signup' className="vsignup__link">Sign up</Link> </p>

                        <h3 className="vsignup__text">Email</h3>
                        <input className="vsignup__inp" type="email" ref={emailRef} required />

                        <h3 className="vsignup__text">Password</h3>
                        <input className="vsignup__inp" type="password" ref={passwordRef} required />                       
                        

                        <button onClick={handleSubmit} className="vsignup__submit">Submit</button>                       

                    
                </div>

                
            </div>
            
        </div>
    )
}


export default VolLogin
