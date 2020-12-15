import React from 'react';
import {connect} from 'react-redux';
import {verifyOTP} from '../action/homeaction';


class VerifyMobile extends React.Component{

    constructor(props){
        super(props);
        this.state={
            phoneNumber:'',
            verificationCode:'1111',
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
        if(props.otp_status){
            this.setState({
                msg:true
            });
            this.props.history.push('/verify-email');
        }
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <input type="text" name="phoneNumber" placeholder="Enter PhoneNumber" onChange={e => this.handleChnage(e)} />
                <button type="submit" >Verify Mobile</button>
                </form>
            </div>
        )
    }
}
const getState = (state) => { console.log(state)
    return{
        otp_status:state.verifyOTP.status
    }
}
export default connect(getState,{verifyOTP})(VerifyMobile);