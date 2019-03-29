import React from "react";
import { connect } from "react-redux";
import "../../css/register.css";
import SelectTime from "../SelectTime/SelecTime";
import { addperson } from "../../actions";
import TimePicker from "rc-time-picker";
import SelectProfileimg from "../../image/addperson.png";
import Lessondraganddrop from "../Lessons/Lessondragandrop";
import thunk from "redux-thunk";
import Moment from "moment";
import { extendMoment } from "moment-range";

const fakedata = ["پایگاه داده", "مهندسی اینترنت", "ریاضی"];

//////////////////////////////ReactComponent//////////////////////////////////////

class register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      telphone: "",
      email: "",
      Lesson: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.start = this.start.bind(this);
    this.handleSubmittime = this.handleSubmittime.bind(this);
    this.end = this.end.bind(this);
  }

  /////////////////////handleSubmit///////////////////////////////////////////

  handleSubmit(e) {
    e.preventDefault();
    const { firstname, lastname, telphone, email, Lesson } = this.state;
    console.log(this.state);
    this.props.addperson({ firstname, lastname, telphone, email, Lesson });
    // .then(resp => resp.type && resp.type === 'ADD_PRESON' && this.props.history.goBack())
  }
  handleSubmittime(e) {
    const moment = extendMoment(Moment);

    e.preventDefault();

    //    var l= moment();
    //    console.log(l)
    let f = [3, 4, 5, 6, 7];
    const { timeend, timestart } = this.state;

    if (timeend != "" && timestart != "") {
      this.setState({
        time: [...this.state.time, [timestart, timeend]]
      });
    } else {
      console.log("Not valued");
    }
  }
  /////////////////////handleInputChange///////////////////////////////////////

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }
  start(e) {
    this.setState({
      timestart: e.target.value
    });
  }
  end(e) {
    this.setState({
      timeend: e.target.value
    });
  }
  /////////////////////////////Render///////////////////////////////////////////////////

  render() {
    return (
      <div className="main2">
        <div className="right">
          <div className="righttable" >
            <div className="Time_left">
              <div className="Time_select">
              <input className="Start_time" type="time"></input>
              <input className="End_time" type="time" ></input>
              <button className="Time_add_btn">اضافه شدن زمان</button>
              </div>
            </div>
            <div className="Time_right">
                <div className="selecTime"></div>
            </div>
          </div>
          <button className="btnsubmit" type="submit">
            ثبت اطلاعات
          </button>
        </div>

        <div className="left">
          <div className="left_up">
            <div className="left_up_form">
              <div className="left_up_form_input">
                <form onSubmit={this.handleSubmit}>
                  <input
                    className="inputstyle"
                    onChange={this.handleInputChange}
                    placeholder="نام"
                    type="text"
                    name="firstname"
                  />

                  <input
                    className="inputstyle"
                    onChange={this.handleInputChange}
                    placeholder="نام خانوادگی"
                    type="text"
                    name="lastname"
                  />

                  <input
                    className="inputstyle"
                    onChange={this.handleInputChange}
                    placeholder="تلفن همراه"
                    type="tel"
                    name="telphone"
                  />

                  <input
                    className="inputstyle"
                    onChange={this.handleInputChange}
                    placeholder="ایمیل"
                    type="email"
                    name="email"
                  />
                </form>
              </div>
              <div className="left_up_form_img">
                <div className="boximgprofile">
                  <img className="imgprofile" src={SelectProfileimg} />
                </div>
              </div>
            </div>
          </div>
          <div className="left_down">
            <div className="Lesson">
              <div className="Lesson_left">
                <div className="selectLesson" />
              </div>
              <div className="Lesson_right">
                <div className="TextBtn_lesson">
                  <input type="text" />
                  <button className="Btn_add_Lesson">اضافه شدن درس</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    {
      /* <div className="main2">
                        <div className="up">
                            <div className="upleft">
                              
                                <Lessondraganddrop fakedata={fakedata}/>                           
                                
                            </div>
                            <div className="upcenter">
                                <div className="boxupcenter">
                                    <img className="imgprfile" src={SelectProfileimg} alt="notfound"/>
                                </div>
                            </div>
                            <div className="upright">
                                <div className="boxupright">

                                <input onChange={this.handleInputChange} placeholder="نام" className="info w3-input" type="text" onChange={this.handleInputChange}  name="firstname"/>
                                <input onChange={this.handleInputChange} placeholder="نام خانوادگی" className="info w3-input" type="text" onChange={this.handleInputChange}  name="lastname"/>
                                <input onChange={this.handleInputChange} placeholder="تلفن همراه" className="info w3-input" type="tel" onChange={this.handleInputChange}  name="telphone"/>
                                <input onChange={this.handleInputChange} placeholder="ایمیل" className="info w3-input" type="email" onChange={this.handleInputChange}  name="email"/>
                               <button type="submit">ok</button>
                                </div>
                            </div>

                        </div>
                        <div className="down">
                            <div className="downcenter">
                    
                           <SelectTime/>
                            </div>
                        </div>
                
                </div>     */
    }
  }
}

export default connect(
  null,
  { addperson }
)(register);