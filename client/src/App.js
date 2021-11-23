import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import VolLogin from './Volunteer/VolLogin';
import VolSignup from './Volunteer/VolSignup';
import Dashboard from './Components/Dashboard';
import AdminLogin from './Admin/AdminLogin';
import LoginSchool from './School/LoginSchool';
import SignupSchool from './School/SignupSchool';
import SchoolRequests from './Admin/SchoolRequests';
import SchoolDashboard from './School/SchoolDashboard';
import RequestForm from './School/RequestForm';
import MyRequests from './School/MyRequests';
import AdminDashboard from './Admin/AdminDashboard';
import RegVols from './Admin/RegVols';
import VolInitiatives from './Admin/VolInitiatives';
import VolDashboard from './Volunteer/VolDashboard';
import MySchools from './Volunteer/MySchools';
import ApprovedReq from './Volunteer/ApprovedReq';
import Profile from './School/Profile';
// import { useStateValue } from './StateProvider';
// import { useEffect } from 'react';

function App() {

  // const [{}, dispatch] = useStateValue();

  // useEffect(() => {
    
  //       dispatch({
  //         type: 'SET_USER',
  //         user: ,
  //       })
      

    
  // }, [])



  return (
    <div className="App">
      <Router >
        <Routes>
          {/* school portal */}
          <Route path='/school-profile' exact element={<Profile />} />
          <Route path='/my-requests' exact element={<MyRequests />} />
          <Route path='/request-form' exact element={<RequestForm />} />
          <Route path='/school-dashboard' exact element={<SchoolDashboard />} />          
          <Route path='/LoginSchool' exact element={<LoginSchool />} />
          <Route path='/SignupSchool' exact element={<SignupSchool />} />

          {/* volunteer portal */}
          <Route path='/approved-req' exact element={<ApprovedReq />} />
          <Route path='/my-schools' exact element={<MySchools />} />
          <Route path='/vol-dashboard' exact element={<VolDashboard />} />
          <Route path='/vol-signup' exact element={<VolSignup />} />
          <Route path='/vol-login' exact element={<VolLogin />} />
          

          {/* admin portal */}
          <Route path='/vol-initiatives' exact element={<VolInitiatives />} />
          <Route path='/reg-vols' exact element={<RegVols />} />
          <Route path='/school-requests' exact element={<SchoolRequests />} />
          <Route path='/admin-dashboard' exact element={<AdminDashboard />} />
          <Route path='/admin-login' exact element={<AdminLogin />} />

          
          <Route exact path='/' element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
