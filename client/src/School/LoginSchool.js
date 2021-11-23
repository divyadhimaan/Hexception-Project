import React from 'react'
import './LoginSchool.css';
import {useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginSchool() {


    const emailRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();
    

    async function handleSubmit (e) {
        e.preventDefault();
        const volData = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        try {
            const res = await axios.post("http://localhost:8000/api/school/login", volData);
            console.log(res.data);
            localStorage.setItem("email", volData.email);
            
            navigate('/school-dashboard');
        
        } catch(err) {
            console.log(err);
        }
    }

    

    return (

        <div className="vsignup">


            <Link to="/" style={{position: "absolute"}} >
                <img src="Media/logo.png" alt="" className="vsignup__logo" />
            </Link>

            <div className="vlogin__container">

                <div className="SchoolLogin__img">
                    
                </div>


                <div className="vlogin__content">
                    <h2>Login</h2>
                    <p className="signup__p">Need an account? <Link className="vsignup__link" to='/SignupSchool'>
                        Sign up
                    </Link></p>

                        <h3 className="vsignup__text">Email</h3>
                        <input className="vsignup__inp" type="email" ref={emailRef} required/>

                        <h3 className="vsignup__text">Password</h3>
                        <input className="vsignup__inp" type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" ref={passwordRef} required/>

                        
                        <button onClick={handleSubmit} className="vsignup__submit">Submit</button>                       

                    
                </div>

                
            </div>
            
        </div>
    )
}

export default LoginSchool;