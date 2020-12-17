import React from 'react';
import {UserSignUpComponent} from '../action/homeaction';
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';

class SignUp extends React.Component{

    constructor(props){
        super(props);
       
        this.state = {
        firstName: "", 
        lastName: "", 
        email: "", 
        phoneNumber: "",
        referredCodeKey: "",
        agreeToPrivacyPolicy: true,
        token: "",
        source: "WEB_APP",
        msg:false
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    handleSubmit = e => {
        console.log(this.state);
        const tokenId = localStorage.getItem('token');
        const data ={
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            phoneNumber:this.state.phoneNumber,
            referredCodeKey:this.state.referredCodeKey,
            agreeToPrivacyPolicy:this.state.agreeToPrivacyPolicy,
            source:this.state.source,
            token: tokenId
        }
        this.props.UserSignUpComponent(data); 
        e.preventDefault();       
    }

    componentWillReceiveProps(props){
        if(props.signUp_status){
            this.setState({
                msg:true
            })
            this.props.history.push('/profile-page');
        }
    }

    render(){
        return(
            <div className="signup-page">
                <h2>SignUp Here</h2>
                
                <div className="signup-container" >
                    <form className="container-page" onSubmit={this.handleSubmit} >
                    <div> 
                    <input className="input-box" type="text" name="firstName" placeholder="First Name" onChange={e=>this.handleChange(e)}  value={this.state.firstName} />
                    <input className="input-box" type="text" name="lastName" placeholder="Last Name" onChange={e=>this.handleChange(e)}  value={this.state.lastName} />
                    <input className="input-box" type="text" name="email" placeholder="Email" onChange={e=>this.handleChange(e)}  value={this.state.email} />
                    <input className="input-box" type="text" name="phoneNumber" placeholder="Phone Number" onChange={e=>this.handleChange(e)}  value={this.state.phoneNumber} />
                    <input className="input-box" type="text" name="referredCodeKey" placeholder="Referral Code Key" onChange={e=>this.handleChange(e)}  value={this.state.referredCodeKey} />
                    </div>
                  
                    
                    {/* <input type="text" name="firstName" placeholder="First Name" onChange={e=>this.handleChange(e)}  value={this.state.firstName} /> */}
                    <Button variant="contained" color="primary" type="submit" onClick={this.handleSubmit}>
                            submit
                            </Button>
                    </form>
                </div>
            </div>
        )
    }
}
const getState = state => {console.log(state)
    return{
        signUp_status: state.UserSignUpComponent.status,
        signUp_data:state.UserSignUpComponent.data
    }
}
export default connect(getState,{UserSignUpComponent})(SignUp);