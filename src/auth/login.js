import React from 'react';
import {LoginComponent} from '../action/homeaction'
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            phoneNumber:"",
            msg:false,
            otp:'',
            userId:''
        }
    }


    handleChange = e => {
        this.setState({           
            phoneNumber: e.target.value,              
        })
    }
    handleSubmit = e => {
        // console.log(this.state.phoneNumber)
        const data = {
           phoneNumber:this.state.phoneNumber
        }
        this.props.LoginComponent(data);
    }
    
    componentWillReceiveProps(props){ 
       
        if(props.login_status){
            this.props.history.push({
                pathname:'/verify-phoneNumber',
            });
        }
        else{
            this.setState({
                msg:true
            })
            
            this.props.history.push({
                pathname:'/verify-phoneNumber',
            });
        }
    }
    
    render(){
            // const veriOtp = this.props.LoginComponent.status;
        return(
            <div className="login-page">
                <h2>Login Here</h2>
                <div className="input-container">
                    <div className="input-mobile">                       
                    <input className="input-box" type="text" name='phonenumber' maxLength="10" placeholder="Enter Phone Number" onChange={this.handleChange}/>
                    </div>
                   <div>
                     <Button variant="contained" color="primary" type="submit" onClick={this.handleSubmit}>
                            Continue
                            </Button>
                            </div>                   
                </div>
            </div>
        )
    }
}

const getState = (state) => {
    return {
        login_status:state.LoginComponent.status,
        login_data: state.LoginComponent.data
    }
}
export default connect(getState,{LoginComponent})(Login);