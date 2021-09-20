import axios from 'axios';
import React, { useState} from 'react';
import BannerAdmin from './BannerAdmin';
import './SchoolRequests.css';

function SchoolRequests() {

    const [filterType, setFilterType] = useState('');
    const [status, setStatus] = useState([])
    const [show, setShow] = useState(true)
    const [chatLink, setChatLink] = useState('')
    const [chatRoom, setChatRoom] = useState('')


    function handleRequestFilter(e) {
        setFilterType(e.target.value);
        
    }

    async function handleSchoolReqs(e) {
        e.preventDefault();
        axios.post("http://localhost:8000/admin/school", {type: filterType})
                     .then(res => {setStatus(res.data); console.log(res.data)})
                     .catch(err=> console.log(err))
        
    }

    
    
    

    return (
        <div className="sr">

            <BannerAdmin title="Check out their Needs" img="Media/school-reg.png" />

            <div className="sr__container">
                <div className="sr__title">
                    <h2 >Requests from School Organisations</h2>
                    <button onClick={handleSchoolReqs} style={{backgroundColor: "transparent", border: "2px solid #b94e4c"}} >Show Requests</button>
                    <div >
                            <select value={filterType} onChange={handleRequestFilter} placeholder="Filter by type of requests" name="interest" className="sr__dropdown">
                                <option >All</option>
                                <option >Infrastructure</option>
                                <option >Teaching</option>
                                <option >Training</option>
                            </select>
                    </div>
                </div>


                <div className="sr__content">
                {status.map(req => { 

                    if(req.status!=="rejected"){
                        async function handleApprove(e) {
                        e.preventDefault();
                        axios.post("http://localhost:8000/modifyQuery", {status: "approved", _id: req._id});
                        setShow(false);

                        setChatLink(req.link);
                        setChatRoom(req.room);
                        
                        
                        }


                        async function handleReject(e) {
                            e.preventDefault();
                            await axios.post("http://localhost:8000/modifyQuery", {status: "rejected", _id: req._id})
                            
                        
                        }
                        
                        return (
                            
                            <div className="sr__request">
                                <h2>{req.schoolName}</h2>
                                <p>{req.queryType}</p>
                                <p>Chat Link: {chatLink}</p>
                                <p>Chat Room: {chatRoom}</p>
                                
                                <div style={{display: "flex", alignSelf: "flex-end"}}>
                                    <button onClick={handleApprove}  className="sr__request-btn" style={{backgroundColor: "#b1d7a9"}} >Approve</button>
                                    {show && <button onClick={handleReject}   className="sr__request-btn" >Reject</button>}
                                </div>
                            </div>
                            
                        )

                    }

                    return <div></div>

                   
                    
                })}
                </div>

            
                
            </div>
            
        </div>
    )
}

export default SchoolRequests
