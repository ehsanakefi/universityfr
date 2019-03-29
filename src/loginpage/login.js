import React from "react";
import { connect } from 'react-redux';
import "../css/login.css";
import { getCode, GET_AUTH_CODE } from '../actions/index'

const loginimg = '../image/login.png';

class login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            phone:"",
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

   handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
   }

   handleSubmit(e){
    e.preventDefault();
    // fakeAuth.authenticate(() => {
    //     this.setState({ redirectToReferrer: true });
    //   });
    const { phone } = this.state;
    this.props.getCode({ phone })
        .then(resp => {
            if (resp.type === GET_AUTH_CODE) {
                this.props.history.push('/code')
            }
        })
   }
   render(){  
       return( 
       <div className="main5">
     <div className="mainlogin">
         <div className="imgloginbox">
            <img className="imglogin" src={loginimg} alt="notfind" />
         </div>
         <div className="login">
         <form onSubmit={this.handleSubmit}>
                <div className="inputbox">
                <input onChange={this.handleInputChange} name="phone" placeholder="Phone" className="inputtext" type="Number" />
                </div>
                {this.props.auth.loader.authGetCodeLoader ? (<div>loading ...</div>) : (
                    <button className="buttonbox" type="submit">ورود</button>
                )}
            </form>
            {this.props.auth.error && (
                <div>{this.props.auth.error}</div>
            )}
        </div>
     </div>
{console.log(this.props.auth)}
   
</div>);
   }
}

const msp = ({ auth }) => ({ auth })
export default connect(msp, {getCode})(login);

  

