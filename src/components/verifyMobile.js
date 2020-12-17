import React from 'react';
import {connect} from 'react-redux';
import {verifyOTP} from '../action/homeaction';
import Button from '@material-ui/core/Button';

class VerifyMobile extends React.Component{

    constructor(props){
        super(props);
        this.state={
            phoneNumber:'',
            verificationCode:'',
            token:''
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
         verificationCode:this.state.verificationCode,
         token:tokenId
     }
     this.props.verifyOTP(data);
     e.preventDefault();
    }

    componentWillReceiveProps(props){
        console.group(props.otp_data);
        if(!props.otp_data.success){

            if(props.otp_data.messageObj.wrongOtpCount >=3){
                this.props.history.push('/');
            }
        }else{
            if(props.otp_status){
                this.props.history.push('/profile-page');
            }
            else{
               this.props.history.push('/verify-email');
            }
        }       
    }
    render(){
        return(
            <div>
                <h2>Verify Phone Number</h2>
                <div className="input-container">
                <form onSubmit={this.handleSubmit}>
                    <div>
                <input className="input-box" type="number" maxLength="10" name="phoneNumber" placeholder="Enter PhoneNumber" onChange={ e => this.handleChnage(e) } />
                <input className="input-box" type="number" name="verificationCode" placeholder="Enter OTP" maxLength="4" pattern="^\d{4}$" onChange={ e => this.handleChnage(e) } required />
                </div>
                <Button variant="contained" color="primary" type="submit" onClick={this.handleSubmit}>
                            Verify
                            </Button>
                </form>
                </div>
            </div>
        )
    }
}
const getState = (state) => { console.log(state)
    return{
        otp_status:state.verifyOTP.status,
        otp_data:state.verifyOTP.data
    }
}
export default connect(getState,{verifyOTP})(VerifyMobile);