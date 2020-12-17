import React from 'react';
import {connect} from 'react-redux';
import {verifyEmail,verifyEmailLink} from '../action/homeaction';
import Button from '@material-ui/core/Button';

class VerifyEmail extends React.Component{

    constructor(props){
        super(props);
        this.state={
            phoneNumber:'',
            email:'',
            token:'',
            // verificationToken: "112233",
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
         phoneNumber:this.state.phoneNumber,
         email:this.state.email,
         token:tokenId
     }
     this.props.verifyEmail(data);

    //  const data2 = {
    //      email:this.state.email,
    //      token:tokenId,
    //      verificationToken:this.state.verificationToken
    //  };
    //  this.props.verifyEmailLink(data2);

     e.preventDefault();
    }

    componentWillReceiveProps(props){ 
        if(props.email_status){
            this.setState({
                msg:true
            });
            this.props.history.push('/email-verification');
        }
    }
    render(){
        return(
            <div>
                <h2>Verify Email</h2>
                <div className="input-container">

                <form onSubmit={this.handleSubmit}>
                 <div>
                <input className="input-box" type="text" name="phoneNumber" placeholder="Enter PhoneNumber" onChange={e => this.handleChnage(e)} />
                <input className="input-box" type="text" name="email" placeholder="Enter email" onChange={e => this.handleChnage(e)} />
                </div>
                <Button variant="contained" color="primary" type="submit" >
                            Verify Email
                            </Button>
                </form>

                </div>
            </div>
        )
    }
}
const getState = (state) => {
    return{
        email_status:state.verifyEmail.status,
        // email_link__status : state.verifyEmailLink.status
        }
}
export default connect(getState,{verifyEmail,verifyEmailLink})(VerifyEmail);