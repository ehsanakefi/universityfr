import React from 'react';

import './css/SelectTimetwo.css';

class Timetable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            rowShanbeh: [],
            rowYekshanbeh: [],
            rowDoshanbeh: [],
            rowSeshanbeh: [],
            rowCharshanbeh: [],
            rowPangshanbeh: [],
            times: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            days: ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه"],

        }
        this.selecttime = this.selecttime.bind(this);
        this.handelsubmit = this.handelsubmit.bind(this)
    }
    handelsubmit() {
        console.log()

        const ar = [{}];

        for (let j = 0; j < this.state.days.length; j++) {
            let start = true;
            let starttime = "";
            let endtime = "";
            const listname = Object.keys(this.state)[j]
            const list = this.state[listname]
            for (let i = 0; i < list.length; i++) {

                if (start) {
                    starttime = (parseInt((list[i] / 2), 10) + 7) + ":";
                    starttime += (list[i] % 2 === 0) ? "00" : "30"
                    endtime = parseInt(((list[i] + 1) / 2)) + 7 + ":";
                    endtime += ((list[i] + 1) % 2 === 0) ? "00" : "30";


                }
                if (list[i + 1] === list[i] + 1) {
                    start = false;
                } else {
                    endtime = parseInt(((list[i] + 1) / 2)) + 7 + ":";
                    endtime += ((list[i] + 1) % 2 === 0) ? "00" : "30";
                    ar.push({
                        "nameDay": this.state.days[j],
                        "startTime": starttime,
                        "endTime": endtime

                    });
                    start = true;

                }
            }
        }
        console.log(ar)
    }
    selecttime(e) {
        const dayRows = e.target.id.split(" ")[0];
        const timecolumn = parseInt(e.target.id.split(" ")[1], 10);

        switch (dayRows) {
            case "0":
                if (e.target.style.background === "red") {

                    const list = this.state.rowShanbeh;
                    list.splice(this.state.rowShanbeh.indexOf(timecolumn), 1);
                    e.target.style.background = "#252936"
                    this.setState({
                        ...this.state,
                        rowShanbeh: list

                    })
                }
                else {
                    e.target.style.background = "red";
                    this.setState({
                        ...this.state,
                        rowShanbeh: [
                            ...this.state.rowShanbeh,
                            timecolumn
                        ].sort((a, b) => a - b)
                    })
                }


                break;
            case "1":
                if (e.target.style.background === "purple") {

                    const list = this.state.rowYekshanbeh;
                    list.splice(this.state.rowYekshanbeh.indexOf(timecolumn), 1);
                    e.target.style.background = "#252936"
                    this.setState({
                        ...this.state,
                        rowYekshanbeh: list

                    })
                }
                else {
                    e.target.style.background = "purple";
                    this.setState({
                        ...this.state,
                        rowYekshanbeh: [
                            ...this.state.rowYekshanbeh,
                            timecolumn
                        ].sort((a, b) => a - b)
                    })
                }


                break;
            case "2":
                if (e.target.style.background === "blue") {

                    const list = this.state.rowDoshanbeh;
                    list.splice(this.state.rowDoshanbeh.indexOf(timecolumn), 1);
                    e.target.style.background = "#252936"
                    this.setState({
                        ...this.state,
                        rowDoshanbeh: list

                    })
                }
                else {
                    e.target.style.background = "blue";
                    this.setState({
                        ...this.state,
                        rowDoshanbeh: [
                            ...this.state.rowDoshanbeh,
                            timecolumn
                        ].sort((a, b) => a - b)
                    })
                }


                break;
            case "3":
                if (e.target.style.background === "pink") {

                    const list = this.state.rowSeshanbeh;
                    list.splice(this.state.rowSeshanbeh.indexOf(timecolumn), 1);
                    e.target.style.background = "#252936"
                    this.setState({
                        ...this.state,
                        rowSeshanbeh: list

                    })
                }
                else {
                    e.target.style.background = "pink";
                    this.setState({
                        ...this.state,
                        rowSeshanbeh: [
                            ...this.state.rowSeshanbeh,
                            timecolumn
                        ].sort((a, b) => a - b)
                    })
                }


                break;
            case "4":
                if (e.target.style.background === "yellow") {

                    const list = this.state.rowCharshanbeh;
                    list.splice(this.state.rowCharshanbeh.indexOf(timecolumn), 1);
                    e.target.style.background = "#252936"
                    this.setState({
                        ...this.state,
                        rowCharshanbeh: list

                    })
                }
                else {
                    e.target.style.background = "yellow";
                    this.setState({
                        ...this.state,
                        rowCharshanbeh: [
                            ...this.state.rowCharshanbeh,
                            timecolumn
                        ].sort((a, b) => a - b)
                    })
                }



                break;
            case "5":
                if (e.target.style.background === "green") {

                    const list = this.state.rowPangshanbeh;
                    list.splice(this.state.rowPangshanbeh.indexOf(timecolumn), 1);
                    e.target.style.background = "#252936"
                    this.setState({
                        ...this.state,
                        rowPangshanbeh: list

                    })
                }
                else {
                    e.target.style.background = "green";
                    this.setState({
                        ...this.state,
                        rowPangshanbeh: [
                            ...this.state.rowPangshanbeh,
                            timecolumn
                        ].sort((a, b) => a - b)
                    })
                }


                break;
            default:
                break;
        }

    }
    changeColor(index, indexRow) {

        this.setState({
            colorbox: [...this.state.colorbox]
        })
    }

    render() {
        //    let changeBoxColor=this.state.colorbox ? "rr": "rrt"
        return (

            <div style={{ backgroundColor: "#252936", direction: "rtl", display: "flex", flexDirection: "column", width: "100%", height: "100%" }}>

                <div style={{ borderBottom: "2px solid #2B2F3B", width: "100%", display: "flex", height: '10%', justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ width: "4px", height: "100%", marginLeft: "4px", backgroundColor: "#4697D4" }}></div>
                    <p style={{ color: "white", fontFamily: 'myFirstFont1' }}>زمان حضور استاد</p>
                    <button style={{ backgroundColor: "#4697D4", color: "white", marginLeft: "5%", borderRadius: "20px", height: "60%", border: "none", fontSize: "0.5rem", fontFamily: "myFirstFont1", padding: "2px 15px 2px 15px" }} onClick={this.handelsubmit}>اضافه کردن به لیست زمان</button>

                </div>
                <div style={{ display: "flex", height: '5%' }}>
                    <p style={{ flexBasis: "4em" }}></p>
                    {this.state.times.map((time, index) => (
                        <div key={index} style={{ justifyContent: "center", display: "flex", flex: "1", height: '100%', fontSize: "0.7rem", color: "#7F7F7F" }}>{time}</div>
                    ))}
                </div>
                <div style={{ flexDirection: "column", display: "flex", flex: "1" }} >
                    {this.state.days.map((day, ind) =>
                        <React.Fragment>

                            <div style={{ display: "flex", height: '10%' }}>
                                <p style={{ flexBasis: "4em", color: "white" }}>{day}</p>
                                <div style={{ display: "flex", flex: "1", height: '100%' }}></div>
                                {this.state.times.map((time, index) => (
                                    time < 20 ? (
                                        time !== 19 ?
                                            <React.Fragment>
                                                <div id={ind + " " + 2 * index} onClick={this.selecttime} style={{ display: "flex", flex: "1", height: '100%', border: "1px solid #7F7F7F", borderLeft: "none" }}></div>
                                                <div id={ind + " " + (2 * index + 1)} onClick={this.selecttime} style={{ display: "flex", flex: "1", height: '100%', border: "1px solid #7F7F7F", borderLeft: "none" }}></div>
                                            </React.Fragment> :
                                            <React.Fragment>

                                                <div id={ind + " " + 2 * index} onClick={this.selecttime} style={{ display: "flex", flex: "1", height: '100%', border: "1px solid #7F7F7F", borderLeft: "none" }}></div>
                                                <div id={ind + " " + (2 * index + 1)} onClick={this.selecttime} style={{ display: "flex", flex: "1", height: '100%', border: "1px solid #7F7F7F" }}></div>
                                            </React.Fragment>
                                    ) : null


                                ))}
                                <div style={{ display: "flex", flex: "1", height: '100%' }}></div>



                            </div>{ind !== 5 ?
                                <div style={{ display: "flex", height: '6%' }} >

                                    <p style={{ flexBasis: "4em" }}></p>
                                    <div style={{ display: "flex", flex: "1", height: '100%' }}></div>
                                    {this.state.times.map((time, index) => (
                                        time < 20 ? (
                                            time !== 19 ?
                                                <React.Fragment>
                                                    <div style={{ display: "flex", flex: "1", height: '100%', borderRight: "1px dashed #7F7F7F", borderLeft: "none", }}></div>
                                                    <div style={{ display: "flex", flex: "1", height: '100%', borderRight: "1px dashed #7F7F7F", borderLeft: "none", }}></div>

                                                </React.Fragment> :
                                                <React.Fragment>

                                                    <div style={{ display: "flex", flex: "1", height: '100%', borderRight: "1px dashed #7F7F7F", borderLeft: "none", }}></div>
                                                    <div style={{ display: "flex", flex: "1", height: '100%', borderRight: "1px dashed #7F7F7F", borderLeft: "1px dashed #7F7F7F" }}></div>
                                                </React.Fragment>
                                        ) : null


                                    ))}
                                    <div style={{ display: "flex", flex: "1", height: '100%' }}></div>

                                </div> : null}
                        </React.Fragment>

                    )}

                </div>
            </div>

        );
    }
}
export default Timetable;