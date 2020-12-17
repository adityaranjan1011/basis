import api from './api'

export const LoginComponent = (data) => async dispatch =>{
    const response = await api.post('/users/phone', data);
    console.log(response.data);
    localStorage.setItem('token',response.data.results.token);
    if(!response.data.results.isLogin){       
      dispatch({type:'login-error', payload:response.data});
    } else {  
      dispatch({type:'login-success', payload:response.data});
    }
} 

export const UserSignUpComponent = (data) => async dispatch =>{
  const response = await api.post('/users', data);
  console.log(response.data);
  if(!response.data.success){       
    dispatch({type:'userSignup-error', payload:response.data});
  } else { 
  //   localStorage.setItem('token',response.data.user.login_token); 
  //   localStorage.setItem('user_data',response.data.user);  
    dispatch({type:'userSignup-success', payload:response.data});
  }
} 

export const verifyOTP = (data) => async dispatch =>{
  const response = await api.post('/users/phone/verify', data);
  console.log(response.data);
  if(!response.data.success){       
    dispatch({type:'otp-error', payload:response.data});
  } else { 
  //   localStorage.setItem('token',response.data.user.login_token); 
  //   localStorage.setItem('user_data',response.data.user);  
    dispatch({type:'otp-success', payload:response.data});
  }
} 

export const verifyEmail = (data) => async dispatch =>{
  const response = await api.post('/users/email', data);
  console.log(response.data);
  if(!response.data.success){       
    dispatch({type:'email-error', payload:response.data});
  } else { 
  //   localStorage.setItem('token',response.data.user.login_token); 
  //   localStorage.setItem('user_data',response.data.user);  
    dispatch({type:'email-success', payload:response.data});
  }
} 

export const verifyEmailLink = (data) => async dispatch =>{
  const response = await api.post('/users/email/verify', data);
  console.log(response.data);
  if(!response.data.success){       
    dispatch({type:'email-link-error', payload:response.data});
  } else { 
  //   localStorage.setItem('token',response.data.user.login_token); 
  //   localStorage.setItem('user_data',response.data.user);  
    dispatch({type:'email-link-success', payload:response.data});
  }
} 

export const resendOTP = (data) => async dispatch =>{
  const response = await api.put('/users/otp/resend', data);
  console.log(response.data);
  if(!response.data.success){       
    dispatch({type:'resend_otp-error', payload:response.data});
  } else { 
  //   localStorage.setItem('token',response.data.user.login_token); 
  //   localStorage.setItem('user_data',response.data.user);  
    dispatch({type:'resend_otp-success', payload:response.data});
  }
} 

export const resendVerifyEmail = (data) => async dispatch =>{
  const response = await api.put('/users/token/resendtoken', data);
  console.log(response.data);
  if(!response.data.success){       
    dispatch({type:'resend-email-token-error', payload:response.data});
  } else { 
  //   localStorage.setItem('token',response.data.user.login_token); 
  //   localStorage.setItem('user_data',response.data.user);  
    dispatch({type:'resend-email-token-success', payload:response.data});
  }
} 
export const logOut = () => async dispatch =>{
  const user_id = sessionStorage.getItem('userId');
  // console.log;ongotpointercapture(user_id)
  const response = await api.delete('/users/logout/'+user_id );
  console.log(response.data);
  if(!response.data.success){       
    dispatch({type:'logout-error', payload:response.data});
  } else { 
 
    dispatch({type:'logout-success', payload:response.data});
  }
} 