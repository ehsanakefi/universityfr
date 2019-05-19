import React from "react";
import { connect } from "react-redux";
import { DragDropContext } from 'react-beautiful-dnd'
import { getPerson } from "../../actions/ProfesorAct";
import { ADDLessonTable, ADDColumnsOrderTable, ADDColumnsTable, LessonTable, ColumnsOrderTable, ColumnsTable } from '../../actions/initionalDataAct'
import "../../css/TableOfLessson.css";
import noimage from "../../image/noimage.jpg";
import notification from "../../image/notification.png";
import styled from 'styled-components';
import { AddIDDrag } from '../../actions/idDataDrag';
import Draggable from './Draggable'
import Droppable from './Droppable'
import searchIcon from "../../image/searchTool.png";
import Columns from './Columns'

const Item = styled.div`
border-radius:3px;
color:#fff;
padding:8px;


background-color: #333;
`;
const droppableStyle = {
  backgroundColor: '#fff',
  width: '100%',
  height: '100%',
  overflowY: 'auto'

}
class TableOfLessson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: ["ساعت / روز", "شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه"],
      time: ["7:00 8:00", "8:00 9:00", "9:00 10:00", "10:00 11:00", "11:00 12:00", "12:00 13:00", "13:00 14:00", "14:00 15:00", "15:00 16:00", "16:00 17:00", "17:00 18:00", "18:00 19:00", "19:00 20:00"]
      , idLable: [{
        name: "",
        sha: [],
        yek: [],
        dosh: [],
        seh: [],
        char: [],
        pang: [],

      }]
      // , tasks: [
      //   { id: 'task-1', content: 'Take out the garbage' },
      //   { id: 'task-2', content: 'Watch my favorite show' },
      //   { id: 'task-3', content: 'Charge my phone' },
      //   { id: 'task-4', content: 'Cook dinner' }
      // ],
      // columns: [
      //   {
      //     id: 'column-1',
      //     title: 'To do',
      //     taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
      //   },
      //   {
      //     id: 'column-2',
      //     title: 'In progress',
      //     taskIds: []
      //   },
      //   {
      //     id: 'column-3',
      //     title: 'Done',
      //     taskIds: []
      //   }
      // ],
      // Facilitate reordering of the columns
      // columnOrder: ['column-1', 'column-2', 'column-3']
    }

  }
  // onDragEnd = result => {
  //   const { destination, source, draggableId } = result


  //   if (!destination) {
  //     return
  //   }

  //   if (
  //     destination.droppableId === source.droppableId &&
  //     destination.index === source.index
  //   ) {
  //     return
  //   }

  //   const start = this.props.initionalData.columns.filter((c) => c.id == source.droppableId)[0]
  //   const finish = this.props.initionalData.columns.filter((c) => c.id == destination.droppableId)[0]

  //   console.log("asdasdsad",start)
  //   if (start === finish) {
  //     const newTaskIds = Array.from(start.id_Lesson)

  //     newTaskIds.splice(source.index, 1)
  //     newTaskIds.splice(destination.index, 0, draggableId)


  //     const newColumn = {
  //       ...start,
  //       id_Lesson: newTaskIds
  //     }


  //     for (let i = 0; i < this.props.initionalData.columns.length; i++) {
  //       if (this.props.initionalData.columns[i].id == newColumn.id) {
  //         this.props.initionalData.columns.splice(i, 1, newColumn)
  //         break;
  //       }
  //     }
  //     this.props.ColumnsTable(this.props.initionalData.columns);


  //     return
  //   }

  //   // Moving from one list to another
  //   const startTaskIds = Array.from(start.id_Lesson)
  //   startTaskIds.splice(source.index, 1)
  //   const newStart = {
  //     ...start,
  //     id_Lesson: startTaskIds
  //   }

  //   const finishTaskIds = Array.from(finish.id_Lesson)
  //   finishTaskIds.splice(destination.index, 0, draggableId)
  //   const newFinish = {
  //     ...finish,
  //     id_Lesson: finishTaskIds
  //   }
  //   for (let i = 0; i < this.props.initionalData.columns.length; i++) {
  //     if (this.props.initionalData.columns[i].id == newStart.id) {
  //       this.props.initionalData.columns.splice(i, 1, newStart)

  //     }
  //     if (this.props.initionalData.columns[i].id == newFinish.id) {
  //       this.props.initionalData.columns.splice(i, 1, newFinish)


  //     }

  //   }
  //   this.props.ColumnsTable(this.props.initionalData.columns);



  // }
  componentWillMount() {



    this.props.getPerson();
    setTimeout(() => {
      this.props.persons.persons.map((person) => {


        let id = {
          name: person.name + person.familyName,
          sha: [],
          yek: [],
          dosh: [],
          seh: [],
          char: [],
          pang: [],
        }

        person.day.map((days) => {
          let st = Number(days.startTime.split(":")[0]);
          let ed = Number(days.endTime.split(":")[0]);
          switch (days.nameday) {
            case "شنبه":

              for (let i = st; i < ed; i++) {
                id.sha = [...id.sha, i+""]
              }

              break;
            case "یکشنبه":
              for (let i = st; i < ed; i++) {
                id.yek = [...id.yek, i+""]
              }

              break;
            case "دوشنبه":
              for (let i = st; i < ed; i++) {
                id.dosh = [...id.dosh, i+""]
              }

              break;
            case "سه شنبه":
              for (let i = st; i < ed; i++) {
                id.seh = [...id.seh, i+""]
              }

              break;
            case "چهارشنبه":
              for (let i = st; i < ed; i++) {
                id.char = [...id.char, i+""]
              }

              break;
            case "پنجشنبه":
              for (let i = st; i < ed; i++) {
                id.pang = [...id.pang, i+""]
              }

              break;



          }
        })
        this.props.AddIDDrag(id)

      })
    }, 500)


    //   this.props.persons.persons.map((profesor) =>
    //     profesor.Lesson.map((lesson, index) =>
    //       this.props.ADDLessonTable({
    //         id: this.props.initionalData.numberOfLesson + ' lesson',
    //         name_Lesson: lesson,
    //         nameAndFamily_Profesor: profesor.name + ' ' + profesor.familyName,

    //       })
    //     )
    //   );

    //   let columnsinitdata = ["columns 0"];
    //   let counter = 1;
    //   for (let i = 1; i < this.state.days.length; i++) {
    //     for (let j = 0; j < this.state.time.length; j++) {
    //       columnsinitdata.push("columns " + counter++);
    //     }
    //   }




    //   columnsinitdata.map((column, index) =>
    //     index != 0 ? this.props.ADDColumnsTable({
    //       id: '' + column,
    //       id_Lesson: []
    //     }) :
    //       this.props.ADDColumnsTable({
    //         id: '' + column,
    //         id_Lesson: this.props.initionalData.Lesson.map((lesson) => lesson.id)
    //       })

    //   )
    //   this.props.initionalData.numberOfColumn += columnsinitdata.length;


    //   this.props.ADDColumnsOrderTable(
    //     columnsinitdata

    //   )

    // }, 500);

  }
  render() {
    return (
      <div className="mainTableOfLesson">
        {/* <DragDropContext onDragEnd={this.onDragEnd} > */}
        <div className="up_TOL">
          <div className="Header_TOL">
            <div className="profile_TOL">
              <div className="imgProfile_TOL">
                <img className="noimage_TOL" src={noimage} alt="NOtFOund" />
              </div>
              <div className="nameProfile_TOL">
                <p className="pargeraphName_TOL">احسان عاکفی</p>
              </div>
            </div>
            <div className="notificationIcon_TOL">
              <img
                className="notification_TOL"
                src={notification}
                alt="NotFound"
              />
            </div>
            <div className="search_TOL">
              <img src={searchIcon} alt="NotFound" className="iconSearch_TOL" />
            </div>
            <div className="headerName_TOL">تنظیم ساعات کلاس</div>
          </div>
        </div>
        <div className="down_TOL">
          <div className="leftProfesor_TOL">

            <div className="centerRight_profesor_TOL" >
              <Droppable style={droppableStyle} id={"hg"}>
                {this.props.persons.persons.map((person, ide) =>

                  person.Lesson.map((lesson, index) => <Draggable  key={ide + "" + index} id={person.name + person.familyName + " " + lesson} style={{ margin: '8px' }}><Item>{lesson}</Item></Draggable>)
                )}

              </Droppable>

              {/* <Droppable>
              {this.props.persons.persons.map((person,ide)=>{
                
                person.Lesson.map((lesson,index)=>
               <Draggable id={ide+"item"+index} style={{ margin: '8px' }}><Item>ess</Item></Draggable>
                )
                

              })}
           </Droppable> */}

              {/* {this.props.initionalData.columnsOrder.length != 0 ? this.props.initionalData.columnsOrder.map((columnId,ind) => {
                  //  console.log(columnId ) ;
                  if(ind==0){
                    const column = this.props.initionalData.columns.filter((c) => { return c.id == columnId })[0]

                    const Lesson = column.id_Lesson.map(
                      taskId => this.props.initionalData.Lesson.filter((c) => { return c.id == taskId })[0]
                    )
  
                      
                    return (
  
                      <Columns key={column.id} column={column} tasks={Lesson} />
                    )
                  }
                  
                }) : null} */}
              {/* {
                  
                  this.props.initionalData.columns[0]!=null?
                  (
                 
                    
                  <Columns key={this.props.initionalData.columns[0].id} lesson={this.props.initionalData.Lesson
                } column={this.props.initionalData.columns[0]}></Columns>)
                
            :<div>is loading ..</div>
          } */}
            </div>
          </div>
          <div className="rightTableDays_TOL">
            <div className="centerLeftTableDays_TOL">
              <table>
                <tbody>
                  {this.state.days.map((days, inde) => {
                    return (
                      <tr key={inde}>
                        <td colSpan="4">{days}</td>

                        {inde == 0 ? this.state.time.map((times, index) => {
                          return (

                            <td key={index} colSpan="4"> {times.split(' ')[0]}
                              <br />
                              {times.split(' ')[1]}</td>

                          )


                        })
                          :
                          this.state.time.map((times, index) => {
                            return (

                              <td key={index} colSpan="4"><Droppable style={droppableStyle} id={inde + " " +( index+7)} ></Droppable> </td>

                            )
                          }
                          )}
                      </tr>
                    )
                  }
                  )}

                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* </DragDropContext> */}
      </div>
    );
  }
}
const msp = ({ DataId, persons }) => ({ DataId, persons });
export default connect(
  msp,
  { getPerson, ColumnsTable, ADDColumnsOrderTable, ADDColumnsTable, ADDLessonTable, AddIDDrag }
)(TableOfLessson);