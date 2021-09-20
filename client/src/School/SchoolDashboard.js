import React from 'react'
import './SchoolDashboard.css'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import SchoolBanner from './SchoolBanner';





function SchoolDashboard() {
    
    
    return (
        <div className="db">
            <SchoolBanner title="Organisation Dashboard" img="Media/vector.png" />


            <div className="main__container">
            <div className="main_title">
                <div className="main__greeting">
                    <h1>Hello!</h1>
                    <p>You can add your requests here.</p>
                </div>
            </div>

            <div className="main__cards">
                {/* <div className="card">
                    <div className="card-image">
                        <img className="card-img" src="Media/school.png" alt="infrastructure"/>
                    </div>
                    <div className="card_inner">
                        <p className="text-primary-p">Infrastructure Requirements</p>

                    </div>
                    <Link to='/request-form'>
                        <button  className="btn add-Request">Add Request</button>
                    </Link>
                         
                </div>

                <div className="card">
                    <div className="card-image">
                        <img className="card-img" src="Media/training.png" alt="Training"/>

                    </div>
                    <div className="card_inner">
                        <p className="text-primary-p">Faculty Training Requirements</p>

                    </div>
                    <Link to='/request-form'>
                        <button  className="btn add-Request">Add Request</button>
                    </Link>  
                </div>

                <div className="card">
                    <div className="card-image">
                        <img className="card-img" src="Media/teach.png" alt="Teaching"/>
                    </div>
                    <div className="card_inner">
                        <p className="text-primary-p">Teaching Requirements</p>

                    </div>
                    <Link to='/request-form'>
                        <button  className="btn add-Request">Add Request</button>
                    </Link>  
                </div> */}

                <div className="card">
                    <div className="card-image">
                    <img className="card-img" src="Media/reqs.png" alt="Others"/>
                    </div>
                    <div className="card_inner">
                        <p className="text-primary-p">Need Requirements?</p>

                    </div>
                    <Link to='/request-form'>
                        <button  className="btn add-Request">Add Request</button>
                    </Link>                      
                </div>
            </div>



        </div>
            <Footer />
        </div>
    )
}

export default SchoolDashboard;