import React, {useRef} from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AdminLogin() {

    const usernameRef = useRef();
    
    const passwordRef = useRef();
    


    

    async function handleSubmit(e) {
        e.preventDefault();
        const Admindata = {
            email: usernameRef.current.value,
            password: passwordRef.current.value,
            
        }
        try {
            const res = await axios.post("http://localhost:8000/admin", Admindata);
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

            <div className="vlogin__container">

                <div className="vsignup__img">
                    
                </div>


                <div className="vlogin__content">
                    <h2>Log in</h2>
                        <h3 className="vsignup__text">Username</h3>
                        <input className="vsignup__inp" type="text" ref={usernameRef} required />

                        <h3 className="vsignup__text">Password</h3>
                        <input className="vsignup__inp" type="password" ref={passwordRef} required />

                       
                        

                        <button onClick={handleSubmit} className="vsignup__submit">Submit</button>                       

                    
                </div>

                
            </div>
            
        </div>
    )
}

export default AdminLogin