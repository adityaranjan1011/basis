export const LoginComponent = (state = {status : null,data:null} , action) => {
    if(action.type === 'login-success')
        return {...state, status:true}
    else if(action.type === 'login-error')
       return {...state, status:false}
     else 
      return state;
   }

   export const UserSignUpComponent = (state = {status : null,data:null} , action) => {
    if(action.type === 'userSignup-success')
        return {...state, status:true}
    else if(action.type === 'userSignup-error')
       return {...state, status:false}
     else 
      return state;
   }

   export const verifyOTP = (state = {status : null,data:null} , action) => {
    if(action.type === 'otp-success')
        return {...state, status:true}
    else if(action.type === 'otp-error')
       return {...state, status:false}
     else 
      return state;
   }

   export const verifyEmail = (state = {status : null,data:null} , action) => {
    if(action.type === 'email-success')
        return {...state, status:true}
    else if(action.type === 'email-error')
       return {...state, status:false}
     else 
      return state;
   }

   export const verifyEmailLink = (state = {status : null,data:null} , action) => {
    if(action.type === 'email-link-success')
        return {...state, status:true}
    else if(action.type === 'email-link-error')
       return {...state, status:false}
     else 
      return state;
   }

   export const resendOTP = (state = {status : null,data:null} , action) => {
    if(action.type === 'otp-success')
        return {...state, status:true}
    else if(action.type === 'otp-error')
       return {...state, status:false}
     else 
      return state;
   }
   export const resendVerifyEmail = (state = {status : null,data:null} , action) => {
    if(action.type === 'token-success')
        return {...state, status:true}
    else if(action.type === 'token-error')
       return {...state, status:false}
     else 
      return state;
   }