import React from 'react';
import {LoginComponent} from '../action/homeaction'

import {connect} from 'react-redux';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            phoneNumber:"",
            msg:false,
            otp:''
        }
    }


    handleChange = e => {
        this.setState({           
            phoneNumber: e.target.value,              
        })
    }
    handleSubmit = e => {
        console.log(this.state.phoneNumber)
        const data = {
           phoneNumber:this.state.phoneNumber
        }
        this.props.LoginComponent(data);
    }

    componentWillReceiveProps(props){
        if(!props.LoginComponent.status){
            this.props.history.push('/signup-page');
        }
        else{
            this.setState({
                msg:true
            })
        }
    }
    render(){
            // const veriOtp = this.props.LoginComponent.status;
        return(
            <div className="login-page">
                <h2>Login Herer</h2>
                <div className="container">
                    <input type='text' name='phonenumber' placeholder="Enter Phone Number" onChange={this.handleChange}/>
                     {/* <input type='text' name='otp' placeholder="Enter OTP" onChange={this.handleChange}/> */}
                    
                   
                        {/* <button type="submit" onClick={this.handleSubmit}>Verify OTP</button> : */}
                       <button type="submit" onClick={this.handleSubmit}>Continue</button>
                   
                </div>
            </div>
        )
    }
}

const getState = (state) => { console.log(state)
    return {
        login_status:state.LoginComponent.status,
        login_data: state.LoginComponent.data
    }
}
export default connect(getState,{LoginComponent})(Login);