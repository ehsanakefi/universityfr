import React from "react";
import { connect } from "react-redux";
import "../css/login.css";
import { GET_AUTH_TOKEN, GET_AUTH_REGISTER } from "../actions/index";
import { LoginUser, Register } from "../actions/AuthAct";
import loginimg from "../image/login.png";

class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      usernameLogin: "",
      passwordLogin: "",
      password: "",
      name: "",
      familyname: "",
      repitpassword: "",
      email: "",
      loginpage: false,
      repitpassword: "",
      isfeildrepitpass: false,
      ismatch: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitRegister = this.handleSubmitRegister.bind(this);
    this.changePageToLogin = this.changePageToLogin.bind(this);
    this.changePageToRegister = this.changePageToRegister.bind(this);
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this)
  }
  changePageToRegister() {
    this.setState({ ...this.state, loginpage: true });

  }
  changePageToLogin() {
    this.setState({ ...this.state, loginpage: false });
  }
  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });

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
  handleSubmitLogin(e) {
    e.preventDefault();
    let { passwordLogin, usernameLogin } = this.state;
    this.props.LoginUser({ usernameLogin, passwordLogin }).then(resp => {


      if (resp.type === GET_AUTH_TOKEN) {
        this.props.history.push("/");
      }
    });
  }
  handleSubmitRegister(e) {
    e.preventDefault();
    // fakeAuth.authenticate(() => {
    //     this.setState({ redirectToReferrer: true });
    //   });
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

    // this.props.LoginUser({ username, password }).then(resp => {
    //   console.log(resp.type)
    //   if (resp.type === GET_AUTH_TOKEN) {
    //     this.props.history.push("/");
    //   }
    // });
  }
  render() {
    return (
      <div className="mainPageLogin_LG">
        <div className="pageLogin_LG">
          <div className="headerLogin_LG">
            <ul className="listheader_LG">
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
          <div className="bodyLogin_LG">
            <div className="mainlogin_LG">

              <div className={this.state.loginpage ? "login_LG" : "login_SIU"}>
                <div className="headSelect_LG">
                  <div onClick={this.changePageToRegister} className={this.state.loginpage ? "pageLoginOn_LG" : "pageLoginOff_LG"}>
                    ورود
              </div>
                  <div onClick={this.changePageToLogin} className={this.state.loginpage ? "pageRegisterOff_LG" : "pageRegisterOn_LG"}>
                    ثبت نام
              </div>
                </div>
                {this.state.loginpage ? <form className="formLogin_LG" onSubmit={this.handleSubmitLogin}>
                  <div className="inputbox_LG">
                    <input
                      onChange={this.handleInputChange}
                      name="usernameLogin"
                      placeholder="نام کاربر"
                      className="inputtext_LG"
                      type="text"
                    />
                    <input
                      onChange={this.handleInputChange}
                      name="passwordLogin"
                      placeholder="رمز عبور"
                      className="inputtext_LG"
                      type="password"
                    />
                  </div>
                  <div className="btnLoginSingUp_LG">
                    {this.props.auth.loader.GET_AUTH_TOKEN_LOAD ? (
                      <div>loading ...</div>
                    ) : (
                        <button className="buttonbox_LG" type="submit">
                          ورود
                </button>
                      )}
                  </div>
                </form> :
                  <form className="formLogin_LG" onSubmit={this.handleSubmitRegister}>
                    <div className="inputbox_SIU">
                      <div className="rowTwoFieldInputbox_SIU">
                        <div className="leftInputbox_SIU">  <input
                          required
                          name="name"
                          onChange={this.handleInputChange}
                          placeholder="نام"
                          className="inputtext_LGS"
                          type="text"
                        /></div>
                        <div className="rightInputbox_SIU"> <input
                          required
                          onChange={this.handleInputChange}
                          placeholder="نام خانوادگی"
                          name="familyname"
                          className="inputtext_LGS"
                          type="text"
                        />  </div>

                      </div>
                      <div className="rowOneFieldInputbox_SIU">
                        <input
                          required
                          onChange={this.handleInputChange}
                          placeholder="نام کاربری"
                          name="username"
                          className="inputtext_LGS"
                          type="text"
                        />
                      </div>
                      <div className="rowTwoFieldInputbox_SIU">
                        <div className="leftInputbox_SIU"> <input
                          required
                          onChange={this.handleInputChange}
                          placeholder="پسورد"
                          name="password"
                          className="inputtext_LGS"
                          type="password"
                        /></div>
                        <div className="rightInputbox_SIU"> <input
                          required
                          onChange={this.handleInputChange}
                          placeholder="تکرار پسورد"
                          name="repitpassword"
                          className="inputtext_LGS"
                          type="password"
                        />
                          {this.state.isfeildrepitpass ? (
                            !this.state.ismatch ? (
                              <p className="P_notmatch_LG">تکرار رمز عبور یکسان نیست!</p>
                            ) : (
                                <p className="P_match_LG">تکرار رمز عبور یکسان است</p>
                              )
                          ) : (
                              <p />
                            )}
                        </div>

                      </div>
                      <div className="rowOneFieldInputbox_SIU">
                        <input
                          required
                          onChange={this.handleInputChange}
                          placeholder="ایمیل"
                          name="email"
                          className="inputtext_LGS"
                          type="email"
                        />
                      </div>
                      {/* <div className="rightInputbox_SIU">
                        <input
                          required
                          name="name"
                          onChange={this.handleInputChange}
                          placeholder="نام"
                          className="inputtext_LGS"
                          type="text"
                        />
                        <input
                          required
                          onChange={this.handleInputChange}
                          placeholder="نام خانوادگی"
                          name="familyname"
                          className="inputtext_LGS"
                          type="text"
                        />     <input
                          required
                          onChange={this.handleInputChange}
                          placeholder="نام کاربری"
                          name="username"
                          className="inputtext_LGS"
                          type="text"
                        />
                      </div>
                      <div className="leftInputbox_SIU">
                        <input
                          required
                          onChange={this.handleInputChange}
                          placeholder="پسورد"
                          name="password"
                          className="inputtext_LGS"
                          type="password"
                        />
                        <input
                          required
                          onChange={this.handleInputChange}
                          placeholder="تکرار پسورد"
                          name="repitpassword"
                          className="inputtext_LGS"
                          type="password"
                        />
                        {this.state.isfeildrepitpass ? (
                          !this.state.ismatch ? (
                            <p className="P_notmatch_LG">تکرار رمز عبور یکسان نیست!</p>
                          ) : (
                              <p className="P_match_LG">تکرار رمز عبور یکسان است</p>
                            )
                        ) : (
                            <p />
                          )}

                        <input
                          required
                          onChange={this.handleInputChange}
                          placeholder="ایمیل"
                          name="email"
                          className="inputtext_LGS"
                          type="email"
                        />
                      </div> */}

                    </div>
                    <div className="btnLoginSingUp_LG">
                      {this.props.auth.loader.GET_AUTH_TOKEN_LOAD ? (
                        <div>loading ...</div>
                      ) : (
                          <button className="buttonbox_LG" type="submit">
                            ثبت نام
            </button>
                        )}
                    </div>
                  </form>
                }

                {this.props.auth.error && <div>{this.props.auth.error}</div>}
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

const msp = ({ auth }) => ({ auth });
export default connect(
  msp,
  { LoginUser, Register }
)(login);
