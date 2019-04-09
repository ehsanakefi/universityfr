import React from "react";
import { connect } from "react-redux";
import "../../css/register.css";
import SelectProfileimg from "../../image/addperson.png";
import thunk from "redux-thunk";
import { extendMoment } from "moment-range";
import { addperson, getPerson,ADD_PERSON } from "../../actions/index";

//////////////////////////////ReactComponent//////////////////////////////////////

class register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      familyName: "",
      day: [],
      Lesson: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitFinal = this.handleSubmitFinal.bind(this);
    this.handleSubmitName = this.handleSubmitName.bind(this);
    this.start = this.start.bind(this);
    this.handleSubmitTime = this.handleSubmitTime.bind(this);
    this.handleSubmitLesson = this.handleSubmitLesson.bind(this);
    // this.handleInputLessonChange=this.handleInputLessonChange.bind(this);
    this.end = this.end.bind(this);
  }

  /////////////////////handleSubmit///////////////////////////////////////////
  handleSubmitFinal(e) {
    e.preventDefault();
    this.props.addperson(this.state).then(resp=>{
       if (resp.type===ADD_PERSON) {
           this.props.history.push('/')
       }
     });
  }
  handleSubmitLesson(e) {
    e.preventDefault();
    console.log(this.state.Lesson);
    if (e.target[0].value != "") {
      this.setState({
        ...this.setState,
        Lesson: [...this.state.Lesson, e.target[0].value]
      });
      e.target[0].value = "";
    }
  }
  handleSubmitTime(e) {
    e.preventDefault();

    if (e.target[7].value != "" && e.target[6].value != "") {
      for (let i = 0; i < e.target.length; i++) {
        if (e.target[i].name == "day") {
          if (e.target[i].checked) {
            this.setState({
              ...this.state,
              day: [
                ...this.state.day,

                {
                  nameday: e.target[i].value,
                  startTime: e.target[6].value,
                  endTime: e.target[7].value
                }
              ]
            });
          }
        }
      }
    }
  }
  handleSubmitName(e) {
    e.preventDefault();
    const { name, familyName } = this.state;
    // this.props.addperson({ firstname, lastname, telphone, email, Lesson });
    // .then(resp => resp.type && resp.type === 'ADD_PRESON' && this.props.history.goBack())
  }
  // handleSubmittime(e) {
  //   const moment = extendMoment(Moment);

  //   e.preventDefault();

  //   //    var l= moment();
  //   //    console.log(l)
  //   let f = [3, 4, 5, 6, 7];
  //   const { timeend, timestart } = this.state;

  //   if (timeend != "" && timestart != "") {
  //     this.setState({
  //       time: [...this.state.time, [timestart, timeend]]
  //     });
  //   } else {
  //     console.log("Not valued");
  //   }
  // }
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
          <div className="righttable">
            <form className="timeform" onSubmit={this.handleSubmitTime}>
              <div className="Time_left">
                <div className="selectdays">
                  <ul>
                    <li>
                      <input type="radio" name="day" value="شنبه" />
                      شنبه
                    </li>
                    <li>
                      <input type="radio" name="day" value="یکشنبه" />
                      یکشنبه
                    </li>
                    <li>
                      <input type="radio" name="day" value="دوشنبه" />
                      دوشنبه
                    </li>
                    <li>
                      <input type="radio" name="day" value="سه شنبه" />
                      سه شنبه
                    </li>
                    <li>
                      <input type="radio" name="day" value="چهارشنبه" />
                      چهارشنبه
                    </li>
                    <li>
                      <input type="radio" name="day" value="‍‍پنجشنبه" />
                      ‍‍پنجشنبه
                    </li>
                  </ul>
                </div>
              </div>
              <div className="Time_center">
                <div className="Time_select">
                  <input className="Start_time" type="time" />
                  <input className="End_time" type="time" />
                  <button className="Time_add_btn">اضافه شدن زمان</button>
                </div>
              </div>
            </form>
            <div className="Time_right">
              <div className="selecTime">
                <div className="selecTime_up">
                  <div className="selecTime_up_az">از</div>
                  <div className="selecTime_up_ta">تا</div>
                  <div className="selecTime_up_roz">روز</div>
                </div>
                <div className="selecTime_down">
                  <div className="List_Time">
                    {this.state.day.map((days, index) => {
                      return [
                        <ul key={index} className="Lits_days">
                          <li className="StartAndEndTime">{days.startTime}</li>
                          <li className="StartAndEndTime">{days.endTime}</li>
                          <li className="nameday">{days.nameday}</li>
                        </ul>
                      ];
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form className="formBtnsubmit" onSubmit={this.handleSubmitFinal}>
            <button className="btnsubmit" type="submit">
              ثبت اطلاعات
            </button>
          </form>
        </div>

        <div className="left">
          <div className="left_up">
            <div className="left_up_form">
              <div className="left_up_form_input">
                <form onSubmit={this.handleSubmitName}>
                  <input
                    className="inputstyle"
                    onChange={this.handleInputChange}
                    placeholder="نام"
                    type="text"
                    name="name"
                  />

                  <input
                    className="inputstyle"
                    onChange={this.handleInputChange}
                    placeholder="نام خانوادگی"
                    type="text"
                    name="familyName"
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
                <div className="selectLesson">
                  <ul>
                    {this.state.Lesson.map((lesson, index) => (
                      <li key={index} className="lessonLi">
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="Lesson_right">
                <div className="TextBtn_lesson">
                  <form
                    onSubmit={this.handleSubmitLesson}
                    className="formAddLesson"
                  >
                    <input type="text" />
                    <button type="submit" className="Btn_add_Lesson">
                      اضافه شدن درس
                    </button>
                  </form>
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
const msp = ({ persons }) => ({ persons });
export default connect(
  msp,
  { addperson }
)(register);
