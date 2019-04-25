import React from "react";
import '../../css/SelectDaysRadio.css'

class ShowTimeandDay extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="main_SDR">
           <div className="selecTime_SDR">
                <div className="selecTime_up_SDR">
                  <div className="selecTime_up_az_SDR">از</div>
                  <div className="selecTime_up_ta_SDR">تا</div>
                  <div className="selecTime_up_roz_SDR">روز</div>
                </div>
                <div className="selecTime_down_SDR">
                  <div className="List_Time_SDR">
                    {this.props.Days.map((days, index) => {
                      return [
                        <ul key={index} className="Lits_days_SDR">
                          <li className="StartAndEndTime_SDR">{days.startTime}</li>
                          <li className="StartAndEndTime_SDR">{days.endTime}</li>
                          <li className="nameday_SDR">{days.nameday}</li>
                        </ul>
                      ];
                    })}
                  </div>
                </div>
              </div>
          </div>
        );
    }
}
export default ShowTimeandDay;
