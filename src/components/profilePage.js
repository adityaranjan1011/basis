import React from 'react';
import {verifyOTP,logOut,UserSignUpComponent} from '../action/homeaction'

import {connect} from 'react-redux';
// import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

class ProfilePage extends React.Component{

    constructor(props){
        
        super(props);
        this.state = {
            firstName:'',
            lastName:'',
            phoneNumebr:'',
            email:'',
            disabled:false,
            isEdit:false
            
        }
    }

    
    componentDidMount(props){
        // console.log(this.props);
        if(this.props.user_data){
        if(this.props.user_data.results.isLogin){
            // console.log("adi")
            var data = this.props.user_data.results.user;
           
            this.setState({
                firstName:data.firstName,
                lastName:data.lastName,
                email:data.email,
                phoneNumber:data.phoneNumber,
                profilePic:data.avatar
            })
        }
    }

        if(this.props.signUp_data ){
            var data2 = this.props.signUp_data.results.user;
            
            this.setState({
                firstName:data2.firstName,
                lastName:data2.lastName,
                email:data2.email,
                phoneNumber:data2.phoneNumber,
                profilePic:data2.avatar
            })
        }
    
}



        handleChange = (e) => {
            this.setState({
                [e.target.name]:e.target.value
            })
        }
        handleLogOut = () =>{
           
            sessionStorage.removeItem('token');
            setTimeout(() => {
                this.props.history.push('/');
            },100)
           
            this.props.logOut();
        }
        handleClick =() => {
            this.setState({
                disabled:true
            })
        }
        handleSubmit = (e) => {
           
            // this.setState({
            //     disabled:true
            // })
            // const tokenId = localStorage.getItem('token');
            // const data ={
            //     firstName:this.state.firstName,
            //     lastName:this.state.lastName,
            //     email:this.state.email,
            //     phoneNumber:this.state.phoneNumber,
            //     referredCodeKey:this.state.referredCodeKey,
            //     agreeToPrivacyPolicy:this.state.agreeToPrivacyPolicy,
            //     source:this.state.source,
            //     token: tokenId
            // }
            // this.props.UserSignUpComponent(data); 
            e.preventDefault(); 
        }

        componentWillReceiveProps(props){
            if(props.logout_status){
                this.props.history.push('/');
            }
        }

    render(){      
        return(            
            <div>
               <div className="profile">
               <div className="profile-header">
               <h2>Profile Page</h2>
                <p onClick={this.handleLogOut}>Log Out</p>
               </div>
               </div>
               <div className="profile-container">
                   <img className="profile-pic" src={this.state.profilePic} alt="ProfilePic" />
                   <form onSubmit={this.handleSubmit}>                  
                   <div >
                   <input className="input-box" type="text" name="firstName" placeholder="First Name" onChange={e=>this.handleChange(e)}  value={this.state.firstName} disabled = {(this.state.disabled)? "" : "disabled"}/>
                    <input className="input-box" type="text" name="lastName" placeholder="Last Name" onChange={e=>this.handleChange(e)}  value={this.state.lastName} disabled = {(this.state.disabled)? "" : "disabled"}/>
                    <input className="input-box" type="text" name="email" placeholder="Email" onChange={e=>this.handleChange(e)}  value={this.state.email} disabled={(this.state.disabled)? "" : "disabled"}/>
                    <input className="input-box" type="text" name="phoneNumber" placeholder="Phone Number" onChange={e=>this.handleChange(e)}  value={this.state.phoneNumber} disabled={(this.state.disabled)? "" : "disabled"}/>
                   </div>
                   {this.state.disabled?
                   <Button variant="contained" color="primary" type="submit"> Save Changes </Button> :
                   <Button variant="contained" color="primary" onClick={this.handleClick} type="submit"> Edit </Button> }
                           
                            
                    </form>
               </div>
            </div>
        )
    }
}
const getState = state => {
    return{
        user_data:state.verifyOTP.data,
        logout_status:state.logOut.status,
        signUp_data:state.UserSignUpComponent.data
    }
}
export default connect(getState,{logOut,UserSignUpComponent,verifyOTP})(ProfilePage);