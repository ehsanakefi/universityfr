import React from 'react';

import '../../css/SelectTimetwo.css';

class SelectTimetwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            TimesDayInitial: {
                times: [20, 19, 18, 17, 15, 16, 14, 13, 12, 11, 10, 9, 8, 7, 6],
                days: ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه"]
            },
            colorbox: [
                ["rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr"],
                ["rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr"],
                ["rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr"],
                ["rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr"],
                ["rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr"],
                ["rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr", "rr"],

            ]

        }
        this.selecttime = this.selecttime.bind(this);

    }
    selecttime(e) {

        e.target.style.background = "#4be76d";
    }
    changeColor(index, indexRow) {

        this.setState({
            colorbox: [...this.state.colorbox]
        })
    }

    render() {
        //    let changeBoxColor=this.state.colorbox ? "rr": "rrt"
        return (
            <div className="selecttimeboxmain">
                <div className="selecttimebox">
                    <div className="selecttimebox_time">
                        <div className="timebar">
                            {
                                this.state.TimesDayInitial.times.map(
                                    (times, index) => <div key={index} className={"r" + times}>{times}</div>
                                )
                            }

                        </div></div>

                    {
                        this.state.TimesDayInitial.days.map(
                            (days, indexRow) => <div key={indexRow} className="selecttimebox_day">

                                <div className="smallboxtime">
                                    <div className="smallboxtimeup">
                                        <div className="rrleft"></div>
                                        {this.state.TimesDayInitial.times.map(
                                            (times, index) => index != 14 ? <div onClick={this.changeColor.bind(index, indexRow)} key={index} className={this.state.colorbox[indexRow][index]}></div> : null
                                        )}
                                        {this.state.TimesDayInitial.times.map(
                                            (times, index) => index != 13 && index != 14 ? <div key={index} className="rr"></div> : null
                                        )}
                                        <div className="empty"></div>
                                    </div>
                                    <div className="smallboxtimedown">
                                        {this.state.TimesDayInitial.times.map(
                                            (times, index) => days != "پنجشنبه" ? <div key={index} className={"rrr" + index}></div> : null
                                        )}

                                    </div>
                                </div>
                                <div className="selecttimebox_column">
                                    {days}
                                </div>
                            </div>
                        )
                    }



                </div>

            </div>
        );
    }
}
export default SelectTimetwo;