import React from 'react';
import {UserSignUpComponent} from '../action/homeaction';
import {connect} from 'react-redux'

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
            this.props.history.push('/verify-phoneNumber');
        }
    }

    render(){
        return(
            <div>
                <h2>SignUp Here</h2>
                
                <div className="container" >
                    <form onSubmit={this.handleSubmit} >

                  
                    <input type="text" name="firstName" placeholder="First Name" onChange={e=>this.handleChange(e)}  value={this.state.firstName} />
                    <input type="text" name="lastName" placeholder="First Name" onChange={e=>this.handleChange(e)}  value={this.state.lastName} />
                    <input type="text" name="email" placeholder="First Name" onChange={e=>this.handleChange(e)}  value={this.state.email} />
                    <input type="text" name="phoneNumber" placeholder="First Name" onChange={e=>this.handleChange(e)}  value={this.state.phoneNumber} />
                    <input type="text" name="referredCodeKey" placeholder="First Name" onChange={e=>this.handleChange(e)}  value={this.state.referredCodeKey} />
                    {/* <input type="text" name="firstName" placeholder="First Name" onChange={e=>this.handleChange(e)}  value={this.state.firstName} /> */}
                    <button type="submit" >submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
const getState = state => {
    return{
        signUp_status: state.UserSignUpComponent.status,
    }
}
export default connect(getState,{UserSignUpComponent})(SignUp);