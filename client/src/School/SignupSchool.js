import React from 'react'
import './SignupSchool.css';
import {useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignupSchool() {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const addRef = useRef();
    const pinRef = useRef();
    const phoneRef = useRef();

    const navigate = useNavigate();

    

    async function handleSubmit(e)  {
        e.preventDefault();
        const volData = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        address: addRef.current.value,
        pincode: pinRef.current.value,
        phone: phoneRef.current.value,

        }

        try {
            const res = await axios.post("http://localhost:8000/api/school/register", volData);
            console.log(res.data);
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
            <div className="vsignup__container">

                <div className="SchoolSignup__img">
                    {/* <img  className="SS_img" src="Media/admin.png" alt="logo"/> */}
                </div>


                <div className="vsignup__content">
                    <h2>Sign up</h2>
                    <p className="signup__p">Already have an account? <Link className="vsignup__link" to='/LoginSchool'>
                        Login
                    </Link></p>
                        <h3 className="SchoolSignup__text">Name</h3>
                        <input className="SchoolSignup__inp" type="text" ref={nameRef} required/>

                        <h3 className="SchoolSignup__text">Email</h3>
                        <input className="SchoolSignup__inp" type="email" ref={emailRef} required/>

                        <h3 className="SchoolSignup__text">Password</h3>
                        <input className="SchoolSignup__inp" type="password"  ref={passwordRef} required/>

                        <h3 className="SchoolSignup__text">Address</h3>
                        <input className="SchoolSignup__inp" type="text" ref={addRef} required/>

                        <h3 className="SchoolSignup__text">Pin code</h3>
                        <input className="SchoolSignup__inp" type="text" ref={pinRef} required/>

                        <h3 className="SchoolSignup__text">Phone No</h3>
                        <input className="SchoolSignup__inp" type="text" ref={phoneRef} required/>

                        <h3 className="SchoolSignup__text">Area of Services</h3>
                        <div >
                            <select name="interest" className="SchoolSignup__dropdown">
                                <option >Infrastructure</option>
                                <option >Teaching</option>
                                <option >Training</option>
                            </select>
                        </div>
                        <button onClick={handleSubmit} className="SchoolSignup__submit">Submit</button>                       

                    
                </div>

                
            </div>
            
        </div>
    )
}

export default SignupSchool;