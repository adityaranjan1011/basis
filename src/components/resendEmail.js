import React from 'react';
import {connect} from 'react-redux';
import {resendVerifyEmail} from '../action/homeaction';
import Button from '@material-ui/core/Button';



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
       
        if(props.resend_email__status){
            this.setState({
                msg:true
            });
            this.props.history.push('/signup-page');
        }
    }
    render(){  
        return(
            <div>
                <h2>Resend Email</h2>
                <div className="input-container">
                
                <form onSubmit={this.handleSubmit}>
              <div >
                <input className="input-box" type="text" name="email" placeholder="Enter email" onChange={e => this.handleChnage(e)} />
                </div>
                <Button variant="contained" color="primary" type="submit" onClick={this.handleSubmit}>
                           Resend 
                            </Button>
                </form>
                </div>
            </div>
        )
    }
}
const getState = (state) => {
    return{
            resend_email__status : state.resendVerifyEmail.status
        }
}
export default connect(getState,{resendVerifyEmail})(ResendVerifyEmail);