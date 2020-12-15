import React from 'react';
import {connect} from 'react-redux';
import {resendOTP} from '../action/homeaction';


class ResendOtp extends React.Component{

    constructor(props){
        super(props);
        this.state={
            phoneNumber:'',
            token:'',
            msg:false
        }
    }

    handleChnage = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
     const tokenId = localStorage.getItem('token');
     const data = {
         phoneNumber:this.state.phoneNumber,
        //  verificationCode:this.state.verificationCode,
         token:tokenId
     }
     this.props.resendOTP(data);
     e.preventDefault();
    }

    componentWillReceiveProps(props){
        if(props.resend_otp_status){
            this.setState({
                msg:true
            });
            this.props.history.push('/resend-email');
        }
    }

    render(){
        console.log(this.props.resend_otp_status);
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <input type="text" name="phoneNumber" placeholder="Enter PhoneNumber" onChange={e => this.handleChnage(e)} />
                <button type="submit" >Resend OTP</button>
                </form>
            </div>
        )
    }
}
const getState = (state) => { console.log(state)
    return{
        resend_otp_status:state.resendOTP.status
    }
}
export default connect(getState,{resendOTP})(ResendOtp);