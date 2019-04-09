import React from "react";
import { connect } from "react-redux";
import "../css/login.css";
import { GET_AUTH_TOKEN } from "../actions/index";
import { LoginUser } from "../actions/AuthAct";
import loginimg from "../image/login.png";

class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // fakeAuth.authenticate(() => {
    //     this.setState({ redirectToReferrer: true });
    //   });
    const { username,password } = this.state;
    this.props.LoginUser({ username,password }).then(resp => {
        console.log(resp.type)
      if (resp.type === GET_AUTH_TOKEN) {
        this.props.history.push("/");
      }
    });
  }
  render() {
    return (
      <div className="main5">
        <div className="mainlogin">
          <div className="imgloginbox">
            <img className="imglogin" src={loginimg} alt="notfind" />
          </div>
          <div className="login">
            <form onSubmit={this.handleSubmit}>
              <div className="inputbox">
                <input
                  onChange={this.handleInputChange}
                  name="username"
                  placeholder="نام کاربر"
                  className="inputtext"
                  type="text"
                />
                <input
                  onChange={this.handleInputChange}
                  name="password"
                  placeholder="رمز عبور"
                  className="inputtext"
                  type="password"
                />
              </div>
              {this.props.auth.loader.GET_AUTH_TOKEN_LOAD ? (
                <div>loading ...</div>
              ) : (
                <button className="buttonbox" type="submit">
                  ورود
                </button>
              )}
            </form>
            {this.props.auth.error && <div>{this.props.auth.error}</div>}
          </div>
        </div>
        {console.log(this.props.auth)}
      </div>
    );
  }
}

const msp = ({ auth }) => ({ auth });
export default connect(
  msp,
  { LoginUser }
)(login);
