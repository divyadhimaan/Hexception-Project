import React from 'react';
import BannerVol from './BannerVol';
import './ApprovedReq.css';

function ApprovedReq() {

    
    

    return (
        <div className="sr">

            <BannerVol title="Assigned Tasks" img="Media/reqs.png" />

            <div className="sr__container">
                <div className="sr__title">
                    <h2 >Events</h2> 
                    <button style={{backgroundColor: "transparent", border: "2px solid #b94e4c"}} >Show My Requests</button>
                    
                </div>

                <div>
                    <div className="sr__content">
                        <div className="sr__request">
                            <h2>School Name</h2>
                            <p>Requirement Type</p>
                            <button className="sr__request-btn" >View</button>    
                        </div>    
                    </div>
                </div>
                {/* <div> */}
                    {/* <div class="main">
                        <div class="timeline">
                            <h3>Task Status</h3>
                            <div class="box">
                            
                                <div class="container">
                                    
                                    <div class="lines">
                                    <div class="dot"></div>
                                    <div class="line"></div>
                                    <div class="dot"></div>
                                    <div class="line"></div>
                                    <div class="dot"></div>
                                    <div class="line"></div>
                                    <div class="dot"></div>
                                    </div>
                                    
                                    <div class="cards">
                                    <div class="card">
                                        
                                        <h4>16:30</h4>
                                        <p>Starting</p>
                                    </div>
                                    <div class="card mid">
                                        <h4>15:22</h4>
                                        <p>Started</p>
                                    </div>
                                    <div class="card">
                                        <h4>14:15</h4>
                                        <p>Allmost there!</p>
                                    </div>
                                    <div class="card">
                                        <h4>14:15</h4>
                                        <p>Completed!</p>
                                    </div>
                                </div>  
                            </div>
                            <div class="bottom">
            
                                <div class="btn">Show all updates</div> */}
            
                            {/* </div>
                        </div>
        
        
                    </div> */}
            {/* </div>
                </div> */}
                    {/* <div className="sr_content">
                            <div className = "sr__request">
                                    <label for="radio-1" class="radio-button-click-target">
                                        <input type="radio" 
                                                name="common-radio-name" 
                                                id="radio-1" 
                                                class="radio-button" />
                                            <span class="radio-button-circle"></span>Starting
                                        </label>
                                    
                                        <label for="radio-1" class="radio-button-click-target">
                                        <input type="radio" 
                                                name="common-radio-name" 
                                                id="radio-1" 
                                                class="radio-button" />
                                            <span class="radio-button-circle"></span>Starting
                                        </label>
                                        <label for="radio-1" class="radio-button-click-target">
                                        <input type="radio" 
                                                name="common-radio-name" 
                                                id="radio-1" 
                                                class="radio-button" />
                                            <span class="radio-button-circle"></span>Starting
                                        </label>
                                        <label for="radio-1" class="radio-button-click-target">
                                        <input type="radio" 
                                                name="common-radio-name" 
                                                id="radio-1" 
                                                class="radio-button" />
                                            <span class="radio-button-circle"></span>Starting
                                        </label>
                                </div>
                            </div> */}





            </div>
            
        </div>
    )
}

export default ApprovedReq
