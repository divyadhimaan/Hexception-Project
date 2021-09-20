import React, { useRef, useState } from 'react';
import './VolSignup.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function VolSignup() {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const ageRef = useRef();
    const profRef = useRef();
    const addRef = useRef();
    const pinRef = useRef();
    const phoneRef = useRef();
    const interestRef = useRef();
    const interestDescRef = useRef();

    const [bloodGrp, setbloodGrp] = useState('');
    const [interest, setInterest] = useState('');
    const [availDays, setAvailDays] = useState('');
    

    const handleBloodGrp = (e) => {
        setbloodGrp(e.target.value);
    }

    const handleInterest = (e) => {
        setInterest(e.target.value);
    }

    const handleAvailDays = (e) => {
        setAvailDays(e.target.value);
    }


    async function handleSubmit (e) {
        e.preventDefault();
        const volData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            age: ageRef.current.value,
            Profession: profRef.current.value,
            Address: addRef.current.value,
            Pincode: pinRef.current.value,
            Phone: phoneRef.current.value,
            Interests: interestRef.current.value,
            interestDesc: interestDescRef.current.value,
            BloodGroup: bloodGrp,
            Area: interest,
            Work: availDays
        }
        try {
            const res = await axios.post("http://localhost:8000/api/volunteer/register", volData);
            console.log(res.data);
        
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

                <div className="vsignup__img">
                   
                </div>


                <div className="vsignup__content">
                    
                    <h2>Sign up</h2>
                    <p>Already have an account? <Link to='/vol-login' className="vsignup__link">Login</Link> </p>
                        <h3 className="vsignup__text">Name</h3>
                        <input className="vsignup__inp" type="text" ref={nameRef} required />

                        <h3 className="vsignup__text">Email</h3>
                        <input className="vsignup__inp" type="email" ref={emailRef} required />

                        <h3 className="vsignup__text">Password</h3>
                        <input className="vsignup__inp" type="password" ref={passwordRef} required />

                        <h3 className="vsignup__text">Age</h3>
                        <input className="vsignup__inp" type="text" ref={ageRef} required />

                        <h3 className="vsignup__text">Address</h3>
                        <input className="vsignup__inp" type="text" ref={addRef} required />

                        <h3 className="vsignup__text">Pin code</h3>
                        <input className="vsignup__inp" type="text" ref={pinRef} required />

                        <h3 className="vsignup__text">Phone No</h3>
                        <input className="vsignup__inp" type="text" ref={phoneRef} required />

                        <h3 className="vsignup__text">Blood Group</h3>
                        <div >
                            <select name="blood group" value={bloodGrp} className="vsignup__dropdown" onChange={handleBloodGrp}>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </select>
                        </div>

                        <h3 className="vsignup__text">Profession</h3>
                        <input className="vsignup__inp" type="text" ref={profRef} required />

                        <h3 className="vsignup__text">What made you interested in volunteering with Us?</h3>
                        <input className="vsignup__inp" type="text" ref={interestDescRef} />

                        <h3 className="vsignup__text">How would you like to contribute?</h3>
                        <div >
                            <select name="interest" value={interest} className="vsignup__dropdown" onChange={handleInterest}>
                                <option value="online">Online</option>
                                <option value="field work">Field work</option>
                                <option value="training and teaching">Training and Teaching</option>
                            </select>
                        </div>

                        <h3 className="vsignup__text">Your area of interest</h3>
                        <input className="vsignup__inp" type="text" ref={interestRef}/>
                        


                        <h3 className="vsignup__text">When will you be available for work?</h3>

                        <div >
                            <select name="available days" value={availDays} className="vsignup__dropdown" onChange={handleAvailDays}>
                                <option value="weekends">Weekends</option>
                                <option value="weekdays">Weekdays</option>
                                <option value="no preference">No Preference</option>
                            </select>
                        </div>

                       
                        

                        <button onClick={handleSubmit} className="vsignup__submit">Submit</button>                       

                    
                </div>

                
            </div>
            
        </div>
    )
}

export default VolSignup
