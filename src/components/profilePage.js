import React from 'react';
import {verifyOTP,logOut,UserSignUpComponent} from '../action/homeaction'

import {connect} from 'react-redux';

import Button from '@material-ui/core/Button';

class ProfilePage extends React.Component{

    constructor(props){
        
        super(props);
        this.state = {
            firstName:'',
            lastName:'',
            phoneNumebr:'',
            email:'',
            
        }
    }

    
    componentDidMount(props){
        console.log(this.props);
        if(this.props.user_data){
        if(this.props.user_data.results.isLogin){
            console.log("adi")
            var data = this.props.user_data.results.user;
            // localStorage.setItem('user_data',JSON.stringify(data))
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
            // localStorage.setItem('user_data',JSON.stringify(data2))
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
            console.log("Log out",);
            sessionStorage.removeItem('token');
            this.props.history.push('/');
            this.props.logOut();
        }
        handleSubmit = (e) => {
            console.log(this.state);
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

        // componentWillUpdate(){
        //     const userData = localStorage.getItem('user_data') ;
        //     if(userData){
        //         this.setState({
        //             firstName:userData.firstName,
        //             lastName:userData.lastName,
        //             email:userData.email,
        //             phoneNumber:userData.phoneNumber,
        //             profilePic:userData.avatar
        //         })
        //     }
        // }
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
                   <div>
                   <input className="input-box" type="text" name="firstName" placeholder="First Name" onChange={e=>this.handleChange(e)}  value={this.state.firstName} />
                    <input className="input-box" type="text" name="lastName" placeholder="Last Name" onChange={e=>this.handleChange(e)}  value={this.state.lastName} />
                    <input className="input-box" type="text" name="email" placeholder="Email" onChange={e=>this.handleChange(e)}  value={this.state.email} />
                    <input className="input-box" type="text" name="phoneNumber" placeholder="Phone Number" onChange={e=>this.handleChange(e)}  value={this.state.phoneNumber} />
                   </div>
                   <Button variant="contained" color="primary" type="submit" >
                            Edit
                            </Button>
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