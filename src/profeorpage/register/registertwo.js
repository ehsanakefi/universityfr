import React from 'react';
import '../../css/registerTow.css'
import ToolBar from '../../ToolBar';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { addProfesor, getPerson, ADD_PROFESOR } from "../../actions/index";
import { connect } from "react-redux";

import Menu from '../../menu';
import noImage from "../../image/bigperson.png"
class RegisterTwo extends React.Component {
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
            column: {
                'droppable-1': {
                    Lesson: ["شبکه کامپیوتر", "هوش مصنوعی", "رایانش امن", "طراحی الگوریتم"]
                },
                'droppable-2': {
                    Lesson: []
                },
            },

            addLesson: "",
            oepnLesson: false,
            selectLesson: [],
            daySelect: [],
            name: "",
            familyName: "",
            membershipType: "",
            sexType: "",
            degreeEducation: ""

        }
        this.selecttime = this.selecttime.bind(this);
        this.handelSubmitTime = this.handelSubmitTime.bind(this);
        this.oepnAddLesson = this.oepnAddLesson.bind(this);
        this.closeAddLesson = this.closeAddLesson.bind(this);
        this.addLesson = this.addLesson.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);

        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    handelSubmit() {
        let { daySelect, name, familyName, membershipType, sexType, degreeEducation } = this.state;
        let { LessonSelected } = this.state.column["droppable-2"].Lesson;


        if (daySelect === []) {
            alert("زمان حضور استاد نباید خالی باشد")
            return
        } if (name === "" && familyName === "") {
            alert("نام یا نام خانوادگی نباید خالی باشد")
            return
        } if (membershipType === "") {
            alert("لطفا عضویت را مشخص کنید")
            return
        } if (sexType === "") {
            alert("لطفا جنسیت را مشخص کنید")
            return
        } if (degreeEducation === "") {
            alert("لطفا نوع مدرک را مشخص کنید")
            return
        } if (LessonSelected === "") {
            alert("درسی انتخاب نشده")
            return
        }
        this.props.addProfesor({ LessonSelected, daySelect, name, familyName, membershipType, sexType, degreeEducation }).then(resp => {
            if (resp.type === ADD_PROFESOR) {
                this.props.history.push('/')
            }
        })
    }
    onDragEnd = result => {
        const { destination, source, draggableId } = result

        if (!destination) {
            return
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return
        }

        const start = this.state.column[source.droppableId]
        const finish = this.state.column[destination.droppableId]

        if (start === finish) {
            const newTaskIds = Array.from(start.Lesson)
            newTaskIds.splice(source.index, 1)
            newTaskIds.splice(destination.index, 0, draggableId)


            this.setState({
                ...this.state,
                column: {
                    ...this.state.column,
                    [source.droppableId]: {
                        Lesson: newTaskIds
                    }
                }
            })
            return
        }

        const startTaskIds = Array.from(start.Lesson)

        startTaskIds.splice(source.index, 1)

        const newStart = {
            ...start,
            taskIds: startTaskIds
        }

        const finishTaskIds = Array.from(finish.Lesson)

        finishTaskIds.splice(destination.index, 0, draggableId)

        this.setState({
            ...this.state,
            column: {
                [source.droppableId]: { Lesson: startTaskIds },
                [destination.droppableId]: { Lesson: finishTaskIds }
            }
        })
    }

    addLesson(event) {
        event.preventDefault();
        if (this.state.addLesson !== "") {
            this.setState({
                ...this.state,
                oepnLesson: false,
                column: {
                    ...this.state.column,
                    ["droppable-1"]: { Lesson: [...this.state.column["droppable-1"].Lesson, this.state.addLesson] }
                }

            });
        }

    }

    handleInputChange(event) {
        event.preventDefault();
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            ...this.state,
            [name]: value
        });
    }
    handleRadioChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            ...this.state,
            [name]: value
        });
    }
    onDrop(data) {

        this.state.Lesson.splice(data.lesson, 1);
        this.setState({
            ...this.state,
            selectLesson: [...this.state.selectLesson, data.lesson]
        })
    }
    handelSubmitTime() {

        const ar = [];

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

        this.setState({
            ...this.state,
            daySelect: ar
        })
    }
    oepnAddLesson() {
        this.setState({
            ...this.state,
            oepnLesson: true
        })
    }
    closeAddLesson() {
        this.setState({
            ...this.state,
            oepnLesson: false
        })

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


    render() {

        return (<div className="registerMain_RM">
            <div className="rightRegistre_RM">
                <Menu />
                <ToolBar />
            </div>
            <div className="leftRegistre_RM">
                <div className="registerProfesor_rm">
                    <div className="registerProfesorRight_RM">
                        <div className="specifications_RM">
                            <form className="formSpecificationsBox_RM">
                                <div className="specificationsImgInputProfile_RM">
                                    <div className="specificationsImgProfile_RM">
                                        <img className="imgprofile" src={noImage} alt="notFound" />
                                    </div>

                                    <div className="specificationsInputProfile_RM" onSubmit={this.handleSubmitName}>
                                        <input
                                            className="inputstyle_RM"
                                            onChange={this.handleInputChange}
                                            placeholder="نام"
                                            type="text"
                                            name="name"
                                        />

                                        <input
                                            className="inputstyle_RM"
                                            onChange={this.handleInputChange}
                                            placeholder="نام خانوادگی"
                                            type="text"
                                            name="familyName"
                                        />

                                    </div>
                                </div>
                                <div className="specificationsRadiobtn_RM">
                                    <div className="emptySpecificationsImgProfile_RM"></div>
                                    <div className="specificationsRadiobtnLeft_RM">
                                        <div className="boxRadiobtn">
                                            <input onChange={this.handleRadioChange} type="radio" name="membershipType" value="AcademicStaff" /> هیت علمی
                                  </div>
                                        <div className="boxRadiobtn">
                                            <input onChange={this.handleRadioChange} type="radio" name="membershipType" value="Invited" /> مدعو
                                  </div>


                                    </div>
                                    <div className="specificationsRadiobtnCenter_RM">
                                        <div className="boxRadiobtn">
                                            <input onChange={this.handleRadioChange} type="radio" name="sexType" value="Male" /> مرد
                                  </div>
                                        <div className="boxRadiobtn">
                                            <input onChange={this.handleRadioChange} type="radio" name="sexType" value="Female" /> زن
                                  </div>


                                    </div>
                                    <div className="specificationsRadiobtnRight_RM">
                                        <div className="boxRadiobtn">
                                            <input onChange={this.handleRadioChange} type="radio" name="degreeEducation" value="Doctor" /> دکترا
                                  </div>
                                        <div className="boxRadiobtn">
                                            <input onChange={this.handleRadioChange} type="radio" name="degreeEducation" value="MasterDegree" /> فوق لیسانس
                                  </div>
                                        <div className="boxRadiobtn">
                                            <input onChange={this.handleRadioChange} type="radio" name="degreeEducation" value="others" /> سایر
                                  </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="timePicker_RM">
                            <div className="timePickerbox_RM">
                                <div style={{ backgroundColor: "#252936", direction: "rtl", display: "flex", flexDirection: "column", width: "100%", height: "100%" }}>

                                    <div style={{ borderBottom: "2px solid #2B2F3B", width: "100%", display: "flex", height: '10%', justifyContent: "space-between", alignItems: "center" }}>
                                        <div style={{ width: "4px", height: "100%", marginLeft: "4px", backgroundColor: "#4697D4" }}></div>
                                        <p style={{ color: "white", fontFamily: 'myFirstFont1' }}>زمان حضور استاد</p>
                                        <button style={{ backgroundColor: "#4697D4", color: "white", marginLeft: "5%", borderRadius: "20px", height: "60%", border: "none", fontSize: "0.5rem", fontFamily: "myFirstFont1", padding: "2px 15px 2px 15px" }} onClick={this.handelSubmitTime}>اضافه کردن به لیست زمان</button>

                                    </div>
                                    <div style={{ display: "flex", height: '5%' }}>
                                        <p style={{ flexBasis: "4em" }}></p>
                                        {this.state.times.map((time, index) => (
                                            <div key={index} style={{ justifyContent: "center", display: "flex", flex: "1", height: '100%', fontSize: "0.7rem", color: "#7F7F7F" }}>{time}</div>
                                        ))}
                                    </div>
                                    <div style={{ flexDirection: "column", display: "flex", flex: "1" }} >
                                        {this.state.days.map((day, ind) =>
                                            <React.Fragment key={"day" + ind}>

                                                <div style={{ display: "flex", height: '10%' }}>
                                                    <p style={{ flexBasis: "4em", color: "white" }}>{day}</p>
                                                    <div style={{ display: "flex", flex: "1", height: '100%' }}></div>
                                                    {this.state.times.map((time, index) => (
                                                        time < 20 ? (
                                                            time !== 19 ?
                                                                <React.Fragment key={"times" + index}>
                                                                    <div id={ind + " " + 2 * index} onClick={this.selecttime} style={{ display: "flex", flex: "1", height: '100%', border: "1px solid #7F7F7F", borderLeft: "none" }}></div>
                                                                    <div id={ind + " " + (2 * index + 1)} onClick={this.selecttime} style={{ display: "flex", flex: "1", height: '100%', border: "1px solid #7F7F7F", borderLeft: "none" }}></div>
                                                                </React.Fragment> :
                                                                <React.Fragment key={"time" + index}>

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
                                                                    <React.Fragment key={"times" + index}>
                                                                        <div style={{ display: "flex", flex: "1", height: '100%', borderRight: "1px dashed #7F7F7F", borderLeft: "none", }}></div>
                                                                        <div style={{ display: "flex", flex: "1", height: '100%', borderRight: "1px dashed #7F7F7F", borderLeft: "none", }}></div>

                                                                    </React.Fragment> :
                                                                    <React.Fragment key={"time" + index}>

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

                            </div>
                        </div>
                    </div>
                    <div className="registerProfesorLeft_RM">
                        <DragDropContext
                            onDragEnd={this.onDragEnd}
                        >
                            <div className="pickLesson_RM">
                                <div className="coursesOffered_RM">
                                    <div className="headerCoursesTime_RM">
                                        <div className="headerCoursesTimeblueColor_RM"></div>
                                        <div className="headerAddText">
                                            <p className="TextHeader_RM">دروس ارایه شده</p>
                                            <p onClick={this.oepnAddLesson} className="TextAdd">+</p>
                                        </div>
                                    </div>
                                    <div className="bodyCoursesTime_RM">
                                        <Droppable droppableId="droppable-1" type="PERSON">
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    style={{ height: "90%", overflowY: "auto", display: "flex", flexDirection: "column" }}
                                                    {...provided.droppableProps}
                                                >
                                                    {this.state.column["droppable-1"].Lesson.map((lesson, index) =>
                                                        <Draggable key={index} draggableId={lesson} index={index}>
                                                            {(provided, snapshot) => (
                                                                <div
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                >
                                                                    <div className="boxDropDragPrsentLesson_RM">
                                                                        <div className={index % 2 == 0 ? "stripPresentLessonGreen_RM" : "stripPresentLessonPurple_RM"}></div>
                                                                        <div className={index % 2 == 0 ? "textPresentGreen_RM" : "textPresentPurple_RM"}>{lesson}</div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </Draggable>

                                                    )}

                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>



                                        {this.state.oepnLesson ? <div tabIndex="1" className="textBoxAddLesson"><input className="inputBoxAddLesson" onChange={this.handleInputChange} type="text" name="addLesson"></input>
                                            <button onClick={this.addLesson} className="btnBoxAddLesson">اضافه</button>
                                            <span onClick={this.closeAddLesson} className="btnCloseBoxAddLesson" >&times;</span>
                                        </div> : null}
                                    </div>
                                </div>
                                <div className="coursesSelected_RM">
                                    <div className="headerCoursesTime_RM">
                                        <div className="headerCoursesTimeblueColor_RM"></div>
                                        <p className="TextHeader_RM">دروس انتخاب شده</p>

                                    </div>
                                    <div className="bodyCoursesTime_RM">
                                        <Droppable droppableId="droppable-2" type="PERSON">
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    style={{ height: "100%", flex: "1", display: "flex", flexDirection: "column" }}
                                                    {...provided.droppableProps}
                                                >
                                                    {this.state.column["droppable-2"].Lesson.map((lesson, index) =>
                                                        <Draggable key={index} draggableId={lesson} index={index}>
                                                            {(provided, snapshot) => (
                                                                <div
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                >
                                                                    <div className="boxDropDragPrsentLesson_RM">
                                                                        <div className={index % 2 == 0 ? "stripPresentLessonGreen_RM" : "stripPresentLessonPurple_RM"}></div>
                                                                        <div className={index % 2 == 0 ? "textPresentGreen_RM" : "textPresentPurple_RM"}>{lesson}</div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </Draggable>

                                                    )}

                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    </div>
                                </div>
                            </div>
                        </DragDropContext>
                        <div className="listTime_RM">
                            <div className="boxListTime_Rm">
                                <div className="headerCoursesTime_RM">
                                    <div className="headerCoursesTimeblueColor_RM"></div>
                                    <p className="TextHeader_RM">لیست زمان های ارایه شده</p>

                                </div>
                                <div className="bodyCoursesTime_RM">
                                    {this.state.daySelect.map((data, index) => <div className="boxlistTimeShow_RM" key={data + index}>
                                        <div className={index % 2 == 0 ? "stripBoxListTimeBlue_RM" : "stripBoxListTimeRed_RM"}></div>
                                        <div className={index % 2 == 0 ? "textPresentTimeBlue_RM" : "textPresentTimeRed_RM"}>
                                            <p>{data.nameDay}</p>
                                            <p>{data.startTime}</p>
                                            <p>{data.endTime}</p>
                                        </div>
                                    </div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="registerBtnSubmit_RM">
                    <button onClick={this.handelSubmit} className="btnSubmit_RM">ثبت مشخصات</button>
                </div>
            </div>


        </div >)
    }
}
const msp = ({ profesor }) => ({ profesor });
export default connect(
    msp,
    { addProfesor }
)(RegisterTwo);
