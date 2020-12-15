import React from 'react';
import {connect} from 'react-redux';
import {resendVerifyEmail} from '../action/homeaction';


class ResendVerifyEmail extends React.Component{

    constructor(props){
        super(props);
        this.state={
          
            email:'',
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
         email:this.state.email,
         token:tokenId
     }
     this.props.resendVerifyEmail(data);

     

     e.preventDefault();
    }

    componentWillReceiveProps(props){
        if(props.email_status && props.email_link__status){
            this.setState({
                msg:true
            });
            this.props.history.push('/signup-page');
        }
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                {/* <input type="text" name="phoneNumber" placeholder="Enter PhoneNumber" onChange={e => this.handleChnage(e)} /> */}
                <input type="text" name="email" placeholder="Enter email" onChange={e => this.handleChnage(e)} />
                <button type="submit" >Resend Email Verify</button>
                </form>
            </div>
        )
    }
}
const getState = (state) => {
    return{
        // email_status:state.verifyEmail.status,
        email_link__status : state.resendVerifyEmail.status
        }
}
export default connect(getState,{resendVerifyEmail})(ResendVerifyEmail);