import React from 'react';

import './SelectTime.css';

class SelectTime extends React.Component{
    constructor(props){
        super(props);
        this.selecttime=this.selecttime.bind(this);
    }
    selecttime(e){
        
      e.target.style.background="#4be76d";
    }
    days=["شنبه","یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنجشنبه"];
    times=["۸:۰۰-۸:۳۰","۸:۳۰-۹:۰۰","۹:۰۰-۹:۳۰","۹:۳۰-۱۰:۰۰","۱۰:۰۰-۱۰:۳۰",
    "۱۰:۳۰-۱۱:۰۰","۱۱:۰۰-۱۱:۳۰","۱۱:۳۰-۱۲:۰۰","۱۲:۰۰-۱۲:۳۰","۱۲:۳۰-۱۳:۰۰",
    "۱۳:۰۰-۱۳:۳۰","۱۳:۳۰-۱۴:۰۰","۱۴:۰۰-۱۴:۳۰","۱۴:۳۰-۱۵:۰۰","۱۵:۰۰-۱۵:۳۰",
    "۱۵:۳۰-۱۶:۰۰","۱۶:۰۰-۱۶:۳۰","۱۶:۳۰-۱۷:۰۰","۱۷:۰۰-۱۷:۳۰","۱۷:۳۰-۱۸:۰۰",
    "۱۸:۰۰-۱۸:۳۰","۱۸:۳۰-۱۹:۰۰","۱۹:۰۰-۱۹:۳۰","۱۹:۳۰-۲۰:۰۰"];
    render(){
        return(
            <div className="selectmain">
                 <form className="form1">
      <div className="divTable">
             <div className="headRow">
             <div className="divCell"></div>
            {
                this.days.map(
                    (day,i)=><div key={i} className="divCell">{day}</div>)  
        }
        </div>
        {
                this.times.map(
                    (time)=><div className="divRow">
                    <div  className="divCell">{time}</div>
                    {
                this.days.map(
                    (day,i)=><div key={i} onClick={this.selecttime} className="divCell1"></div>)  
        }
                    </div>)  
        }
            
      </div>
  </form>
            </div>
        );
    }
}
export default SelectTime;