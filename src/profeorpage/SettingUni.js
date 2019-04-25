import React from "react";
import '../css/SettingUni.css'
import { connect } from "react-redux";

import {addTimeandClass} from '../actions/index'
class SettingUni extends React.Component {
    constructor(props) {
        super(props)
    this.state={
        days:[]
    }
    this.handleSubmitfinal=this.handleSubmitfinal.bind(this)
    this.handleSubmitTime = this.handleSubmitTime.bind(this);
    }
     handleSubmitfinal(e){
         e.preventDefault();
         this.props.addTimeandClass(this.state)
     }
    handleSubmitTime(e) {
        e.preventDefault();
        console.log("ee "+e.target[8].value)
        if (e.target[7].value != "" && e.target[6].value != "") {
          for (let i = 0; i < e.target.length; i++) {
            if (e.target[i].name == "day") {
              if (e.target[i].checked) {
                this.setState({
                  days: [
                    ...this.state.days,
    
                    {
                      nameday: e.target[i].value,
                      startTime: e.target[6].value,
                      endTime: e.target[7].value,
                      numberClass:e.target[8].value
                    }
                  ]
                });
              }
            }
          }
        }
      }
    render() {
        return (
            <div className="main_SU">
                <div className="settingCenete_SU">
                <form className="timeform_SU" onSubmit={this.handleSubmitTime}>
              <div className="Time_left_SU">
              <div className="selectdays_SU">
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
              <div className="Time_center_SU">
                <div className="Time_select_SU">
                  <input className="Start_time_SU" type="time" />
                  <input className="End_time_SU" type="time" />
                  <input className="classNumber_SU" type="number"/>
                  <button className="Time_add_btn_SU">اضافه شدن زمان</button>
                </div>
              </div>
            </form>
            <div className="Time_right_SU">
            <div className="selecTime_SU">
                <div className="selecTime_up_SU">
                  <div className="selecTime_up_az_SU">از</div>
                  <div className="selecTime_up_ta_SU">تا</div>
                  <div className="selecTime_up_roz_SU">روز</div>
                  <div className="selecTime_up_tedad_SU">تعداد کلاس</div>
                </div>
                <div className="selecTime_down_SU">
                  <div className="List_Time_SU">
                    {this.state.days.map((days, index) => {
                      return [
                        <ul key={index} className="Lits_days_SU">
                          <li className="StartAndEndTime_SU">{days.startTime}</li>
                          <li className="StartAndEndTime_SU">{days.endTime}</li>
                          <li className="nameday_SU">{days.nameday}</li>
                          <li className="numberClass_SU">{days.numberClass}</li>
                        </ul>
                      ];
                    })}
                  </div>
                </div>
              </div>
            </div>          
                </div>
                <div className="registerBtn_SU">
                <form onSubmit={this.handleSubmitfinal}>
                    <button>ثبت اطلاعات</button>
                </form>
                
                </div>
            </div>
        );
    }
}
const msp = ({ settinguniversity }) => ({ settinguniversity });
export default connect(
  msp,
  { addTimeandClass }
)(SettingUni);