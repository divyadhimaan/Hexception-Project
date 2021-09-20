import React from 'react'
import './AdminDashboard.css'
import BannerAdmin from './BannerAdmin'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'





function AdminDashboard() {

    return (
        <div className="db">
            <BannerAdmin title="Admin Dashboard" img="Media/admin-dash.png" />


            <div className="main__container">
            <div className="main_title">
                <div className="main__greeting">
                    <h1>Hello!</h1>
                    {/* <p>You can view all the requests here.</p> */}
                </div>
            </div>

            <div className="main__cards">
                <div className="card col-4">
                    <div className="card-image">
                        <img className="card-img" src="Media/hand.png" alt="infrastructure"/>
                    </div>
                    <div className="card_inner">
                        <p className="text-primary-p">Volunteer Registrations</p>

                    </div>
                    <Link to='/reg-vols'>
                        <button  className="btn add-Request">Checkout</button>
                    </Link>
                         
                </div>

                <div className="card col-4">
                    <div className="card-image">
                        <img className="card-img" src="Media/school.png" alt="Training"/>

                    </div>
                    <div className="card_inner">
                        <p className="text-primary-p">School Requests</p>

                    </div>
                    <Link to='/school-requests'>
                        <button  className="btn add-Request">Checkout</button>
                    </Link>  
                </div>

                <div className="card col-4">
                    <div className="card-image">
                        <img className="card-img" src="Media/task.png" alt="Teaching"/>
                    </div>
                    <div className="card_inner">
                        <p className="text-primary-p">Volunteer Initiatives</p>

                    </div>
                    <Link to='/vol-initiatives'>
                        <button  className="btn add-Request">Checkout</button>
                    </Link>  
                </div>

            </div>



        </div>
            <Footer />
        </div>
    )
}

export default AdminDashboard;