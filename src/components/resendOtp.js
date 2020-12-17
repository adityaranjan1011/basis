import React from 'react';
import {connect} from 'react-redux';
import {resendOTP} from '../action/homeaction';
import Button from '@material-ui/core/Button';

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
            phoneNumber: e.target.value
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
        // console.log("compon")
        if(props.resend_otp_status){
            this.setState({
                msg:true
            });
            this.props.history.push('/resend-email');
        }
    }

    render(){
        
        return(
            <div>
                <h2>Resend OTP</h2>
                <div className="input-container">               
                <form onSubmit={this.handleSubmit}>
                    <div>
                <input className="input-box" type="text" name="phoneNumber" placeholder="Enter PhoneNumber" onChange={e => this.handleChnage(e)} />
                </div>
                <Button variant="contained" color="primary" type="submit" onClick={this.handleSubmit}>
                           Resend
                            </Button>
                </form>
                </div>
            </div>
        )
    }
}
const getState = (state) => { 
    return{
        resend_otp_status:state.resendOTP.status
    }
}
export default connect(getState,{resendOTP})(ResendOtp);