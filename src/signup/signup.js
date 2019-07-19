import React from "react";
import { connect } from "react-redux"
import "../css/signup.css";
import { GET_AUTH_REGISTER } from "../actions/index";
import { Register } from "../actions/AuthAct";
import LogoTime from "../image/logo-time.png"
import axios from "axios";
import { API } from '../actions/types'
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
    this.props.Register({
      name,
      familyname,
      username,
      password,
      telphone,
      email
    }).then(
      resp => {
        if (resp.type === GET_AUTH_REGISTER) {
          this.props.history.push("/");
        }
      })
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });

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
  }
  render() {
    return (
      <div className="main_SUP">
        <div className="fake"></div>
        <div className="asli">
          <div className="herdersignup_SUP">
            <ul className="listheader_SUP">
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
          <div className="bodysignup_SUP">
            <div className="boxmain_SUP">
              <div className="partright_SUP">
                <div className="textHeadSingUp_SUP">
                  <h2 className="headofform_SUP">ثبت نام</h2>
                </div>
                <div className="bodyFormSingUp_SUP">
                  <form className="inputpartright_SUP" onSubmit={this.handleSubmit} >

                    <div className="upBodyFormSingUp_SUP">
                      <div className="rightInputBodyFormSingUp_SUP">
                        <div className="inputboxsign_SUP">
                          <input
                            required
                            name="name"
                            onChange={this.handleInputChange}
                            placeholder="نام"
                            className="inputsign_SUP"
                            type="text"
                          />
                        </div>
                        <div className="inputboxsign_SUP">
                          <input
                            required
                            onChange={this.handleInputChange}
                            placeholder="نام خانوادگی"
                            name="familyname"
                            className="inputsign_SUP"
                            type="text"
                          />
                        </div>
                        <div className="inputboxsign_SUP">
                          <input
                            required
                            onChange={this.handleInputChange}
                            placeholder="نام کاربری"
                            name="username"
                            className="inputsign_SUP"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="leftInputBodyFormSingUp_SUP">
                        <div className="inputboxsign_SUP">
                          <input
                            required
                            onChange={this.handleInputChange}
                            placeholder="پسورد"
                            name="password"
                            className="inputsign_SUP"
                            type="password"
                          />
                        </div>
                        <div className="inputboxsign_SUP">
                          <input
                            required
                            onChange={this.handleInputChange}
                            placeholder="تکرار پسورد"
                            name="repitpassword"
                            className="inputsign_SUP"
                            type="password"
                          />
                        </div>

                        {this.state.isfeildrepitpass ? (
                          !this.state.ismatch ? (
                            <p className="P_notmatch_SUP">تکرار رمز عبور یکسان نیست!</p>
                          ) : (
                              <p className="P_match_SUP">تکرار رمز عبور یکسان است</p>
                            )
                        ) : (
                            <p />
                          )}

                        <div className="inputboxsign_SUP">
                          <input
                            required
                            onChange={this.handleInputChange}
                            placeholder="ایمیل"
                            name="email"
                            className="inputsign_SUP"
                            type="email"
                          />
                        </div>
                      </div>

                    </div>

                    <div className="downBodyFormSingUp_SUP">
                      <div className="btnboxsign_SUP">
                        <button className="btnsign_SUP" type="submit">

                          ثبت نام
                  </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* <form onSubmit={this.handleSubmit} className="inputpartright_SUP">
                 
                
                
                </form> */}
              </div>
              <div className="partleft_SUP">
                <div className="textPartLeft_SUP">
                  <div className="upTextPartLeft_SUP">
                    <img className="logoTime" src={LogoTime} alt="NotFound" />
                    <div className="centerUpTextPartLeft_SUP">
                      <h2>خوش آمدید</h2>
                      <p>شما می توانید در این سایت به صورت رایگان ثبت نام کنید</p>
                    </div>
                  </div>
                  <div className="downTextPartLeft_SUP">
                    <button className="changeLoginPage_SUP">ورود</button>
                  </div>
                </div>
              </div>
            </div>
          </div >
        </div ></div>
    );
  }
}
const msp = ({ auth }) => ({ auth });
export default connect(msp, { Register })(signup);
