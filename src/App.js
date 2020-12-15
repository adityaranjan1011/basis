// import logo from './logo.svg';
import './App.css';
import Login from './auth/login';
import SignUp from './auth/signup';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import VerifyMobile from './components/verifyMobile';
import VerifyEmail from './components/verifyEmail';
import ResendOtp from './components/resendOtp';
import ResendVerifyEmail  from './components/resendEmail';

function App() {
  return (
    <div className="App">
      <Router >
        <Route exact path ="/" component={Login} />
        <Route exact path = "/signup-page" component={SignUp} />
        <Route exact path = "/verify-phoneNumber" component={VerifyMobile} />
        <Route exact path = "/verify-email" component= {VerifyEmail} />
        <Route exact path = "/resend-otp" component={ResendOtp} />
        <Route exact path = "/resend-email" component={ResendVerifyEmail} />
      </Router> 
    </div>
  );
}

export default App;
