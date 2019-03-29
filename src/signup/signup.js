import React from "react";
import "../css/signup.css";
import axios from "axios";
import { API} from '../actions/types'
import Imgleft from "../image/techer.png";
class signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      familyname: "",
      username: "",
      password: "",
      repitpassword: "",
      telphone: "",
      email: "",
      isfeildrepitpass: false,
      ismatch: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
      event.preventDefault();
    let {
      name,
      familyname,
      username,
      password,
      telphone,
      email
    } = this.state;
    axios
      .post(`http://localhost:1376/register`, {
        name,
        familyname,
        username,
        password,
        telphone,
        email
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    console.log(value);
    this.setState({
      [name]: value
    });

    console.log(this.state.isfeildrepitpass + "  $$$ " + this.state.ismatch);
    console.log(this.state.repitpassword != "");
    setTimeout(() => {
      if (this.state.repitpassword != "") {
        this.setState({
          isfeildrepitpass: true
        });
        if (this.state.repitpassword == this.state.password) {
          this.setState({
            ismatch: true
          });
        } else {
          this.setState({
            ismatch: false
          });
        }
      } else {
        this.setState({
          isfeildrepitpass: false
        });
      }
    }, 300);
    console.log(this.state.isfeildrepitpass + "   " + this.state.ismatch);
  }
  render() {
    return (
      <div className="main6">
        <div className="herdersignup">
          <ul className="listheader">
            <li>
              <a>صفحه اصلی</a>
            </li>
            <li>
              <a>ارتباط با ما</a>{" "}
            </li>
            <li>
              <a>درباره ی ما</a>
            </li>
          </ul>
        </div>
        <div className="bodysignup">
          <div className="boxmain">
            <div className="partright">
              <div>
                <h1 className="headofform">ثبت نام</h1>
              </div>
            <form onSubmit={this.handleSubmit} className="inputpartright">
                <div className="inputboxsign">
                  <input
                    required
                    name="name"
                    onChange={this.handleInputChange}
                    placeholder="نام"
                    className="inputsign"
                    type="text"
                  />
                </div>
                <div className="inputboxsign">
                  <input
                    required
                    onChange={this.handleInputChange}
                    placeholder="نام خانوادگی"
                    name="familyname"
                    className="inputsign"
                    type="text"
                  />
                </div>
                <div className="inputboxsign">
                  <input
                    required
                    onChange={this.handleInputChange}
                    placeholder="نام کاربری"
                    name="username"
                    className="inputsign"
                    type="text"
                  />
                </div>
                <div className="inputboxsign">
                  <input
                    required
                    onChange={this.handleInputChange}
                    placeholder="پسورد"
                    name="password"
                    className="inputsign"
                    type="password"
                  />
                </div>
                <div className="inputboxsign">
                  <input
                    required
                    onChange={this.handleInputChange}
                    placeholder="تکرار پسورد"
                    name="repitpassword"
                    className="inputsign"
                    type="password"
                  />
                </div>

                {this.state.isfeildrepitpass ? (
                  !this.state.ismatch ? (
                    <p className="P_notmatch">تکرار رمز عبور یکسان نیست!</p>
                  ) : (
                    <p className="P_match">تکرار رمز عبور یکسان است</p>
                  )
                ) : (
                  <p />
                )}
                <div className="inputboxsign">
                  <input
                    required
                    onChange={this.handleInputChange}
                    placeholder="تلفن همراه"
                    name="telphone"
                    className="inputsign"
                    type="text"
                  />
                </div>
                <div className="inputboxsign">
                  <input
                    required
                    onChange={this.handleInputChange}
                    placeholder="ایمیل"
                    name="email"
                    className="inputsign"
                    type="email"
                  />
                </div>
                <div className="btnboxsign">
                  <button className="btnsign" type="submit">
                    {" "}
                    ثبت نام
                  </button>
                </div>
              </form>
            </div>
            <div className="partleft">
              <img src={Imgleft} alt="NotFound" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default signup;
