import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
        <Switch>
          {/* school portal */}
          <Route path='/school-profile' exact component={Profile} />
          <Route path='/my-requests' exact component={MyRequests} />
          <Route path='/request-form' exact component={RequestForm} />
          <Route path='/school-dashboard' exact component={SchoolDashboard} />          
          <Route path='/LoginSchool' exact component={LoginSchool} />
          <Route path='/SignupSchool' exact component={SignupSchool} />

          {/* volunteer portal */}
          <Route path='/approved-req' exact component={ApprovedReq} />
          <Route path='/my-schools' exact component={MySchools} />
          <Route path='/vol-dashboard' exact component={VolDashboard} />
          <Route path='/vol-signup' exact component={VolSignup} />
          <Route path='/vol-login' exact component={VolLogin} />
          

          {/* admin portal */}
          <Route path='/vol-initiatives' exact component={VolInitiatives} />
          <Route path='/reg-vols' exact component={RegVols} />
          <Route path='/school-requests' exact component={SchoolRequests} />
          <Route path='/admin-dashboard' exact component={AdminDashboard} />
          <Route path='/admin-login' exact component={AdminLogin} />

          
          <Route exact path='/' component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
