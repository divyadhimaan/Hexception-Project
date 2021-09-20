import React, {useRef} from 'react';
import './RequestForm.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function RequestForm() {

    const reqtypeRef = useRef();
    const FundreqRef = useRef();
    const desRef = useRef();

    const history = useHistory();

    

    async function handleSubmit(e)  {
        e.preventDefault();
        let email = localStorage.getItem("email");
        const Schooldata = {
            email: email,
            queryType: reqtypeRef.current.value,
            description: desRef.current.value,
            fund: FundreqRef.current.value,
            
        }
        try {
            const res = await axios.post("http://localhost:8000/schools/addRequest", Schooldata);
            console.log(res.data);
            
            history.push('/my-requests');
        
        } catch(err) {
            console.log(err);
        }
    }


    return (
        <div className="reqform">
            <div className="req_box">

                <div className="bg_img">
                    
                </div>


                <div className="content">
                    <h2 className="req_text">Request</h2>

                        <h3 className="school_display">Request Type</h3>
                        <input className="school_input" type="text" ref={reqtypeRef} required />

                        <h3 className="school_display">Fund Required</h3>
                        <input className="school_input" type="text" ref={FundreqRef} required />

                        <h3 className="school_display">Request Description</h3>
                        <input className="school_input_bigger" type="text" ref={desRef} required />

                       
                        

                        <button onClick={handleSubmit} className="send_button">Send</button>                       

                    
                </div>

                
            </div>
            
        </div>
    )
}

export default RequestForm;