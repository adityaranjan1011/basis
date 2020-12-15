import { combineReducers } from 'redux';
// import { combineReducers } from 'redux';

import {LoginComponent,UserSignUpComponent,verifyOTP,verifyEmail,verifyEmailLink,resendOTP,resendVerifyEmail} from './homereducer';


export default combineReducers({

    LoginComponent : LoginComponent,
    UserSignUpComponent :UserSignUpComponent,
    verifyOTP : verifyOTP,
    verifyEmail :verifyEmail,
    verifyEmailLink : verifyEmailLink,
    resendOTP: resendOTP,
    resendVerifyEmail:resendVerifyEmail
})