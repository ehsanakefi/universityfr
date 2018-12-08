import React from "react";
import { connect } from 'react-redux';
import loginimg from '../image/login.png';
// import { getToken } from '../actions/AuthAct'
import { GET_AUTH_TOKEN, unAuth, getToken } from '../actions/index'
import "../css/code.css";

class Code extends React.Component{
    constructor(props){
        super(props);
        this.state={
            code: '',
            timer: 90
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.timerInterval = null
    }
    componentDidMount() {
        const authTime = localStorage.getItem('authTime');
        if (authTime) {
            const diffrence = Math.round((new Date() - Date.parse(JSON.parse(authTime))) / 1000);
            
            this.setState({ timer: this.state.timer - diffrence })
        }
        this.timerInterval = setInterval(() => {
            if (this.state.timer < 0) {
                this.props.unAuth();
                clearInterval(this.timerInterval)
                this.props.history.push('/login')
            }
            this.setState({timer: --this.state.timer})
        }, 1000)
    }
   handleInputChange(event){
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });

   }
   handleSubmit(e){
    e.preventDefault();
    const { code } = this.state;
    this.props.getToken({code, phone: this.props.auth.user.phone})
        .then(resp => {
            console.log(resp)
            if (resp.type === GET_AUTH_TOKEN) {
                this.props.history.push('/')
            }
        })
   }
   componentWillUnmount() {
       clearInterval(this.timerInterval)
   }
   render(){
       return( <div className="main5">
     <div className="mainlogin">
         <div className="imgloginbox">
            <img className="imglogin" src={loginimg} alt="notfind" />
         </div>
         <div className="Code">
         {this.state.timer}
         <form onSubmit={this.handleSubmit}>

            <div className="inputbox">
                <input
                    className="inputtext"
                    name="code"
                    placeholder="Code"
                    type="number"
                    value={this.state.code}
                    onChange={this.handleInputChange} />
            </div>
                
                {this.props.auth.loader.authGetUserLoader ? (<div>loading ...</div>) : (
                    <button className="buttonbox" type="submit">ورود</button>
                )} 

            </form>
        
        </div>
     </div>

   
</div>);
   }
}

const msp = ({ auth }) => ({ auth });

export default connect(msp, {getToken, unAuth})(Code);