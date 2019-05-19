import React from "react";
import { connect } from "react-redux";
import { DragDropContext } from 'react-beautiful-dnd'
import { getPerson } from "../../actions/ProfesorAct";
import { ADDLessonTable, ADDColumnsOrderTable, ADDColumnsTable } from '../../actions/initionalDataAct'
import "../../css/TableOfLessson.css";
import noimage from "../../image/noimage.jpg";
import notification from "../../image/notification.png";
import searchIcon from "../../image/searchTool.png";
import  Columns  from './Columns'



class TableOfLessson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: ["ساعت / روز", "شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه"],
      time: ["7:00 8:00", "8:00 9:00", "9:00 10:00", "10:00 11:00", "11:00 12:00", "12:00 13:00", "13:00 14:00", "14:00 15:00", "15:00 16:00", "16:00 17:00", "17:00 18:00", "18:00 19:00", "19:00 20:00"]
    //   ,   tasks: {
    //     'task-1': { id: 'task-1', content: 'Take out the garbage' },
    //     'task-2': { id: 'task-2', content: 'Watch my favorite show' },
    //     'task-3': { id: 'task-3', content: 'Charge my phone' },
    //     'task-4': { id: 'task-4', content: 'Cook dinner' }
    //   },
    //   columns: {
    //     'column-1': {
    //       id: 'column-1',
    //       title: 'To do',
    //       taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
    //     },
    //     'column-2': {
    //       id: 'column-2',
    //       title: 'In progress',
    //       taskIds: []
    //     },
    //     'column-3': {
    //       id: 'column-3',
    //       title: 'Done',
    //       taskIds: []
    //     }
    //   },
    //   // Facilitate reordering of the columns
    //   columnOrder: ['column-1', 'column-2', 'column-3']
     }

  }
  onDragEnd = result => {
    const { destination, source, draggableId } = result
    console.log(destination);
    console.log(source);
    console.log(draggableId);

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const start = this.state.columns[source.droppableId]
    const finish = this.state.columns[destination.droppableId]

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      }

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        }
      }

      this.setState(newState)
      return
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds)
    startTaskIds.splice(source.index, 1)
    const newStart = {
      ...start,
      taskIds: startTaskIds
    }

    const finishTaskIds = Array.from(finish.taskIds)
    finishTaskIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    }

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }
    this.setState(newState)
  }

  componentWillMount() {


        this.props.getPerson();
        setTimeout(() => {




          this.props.persons.persons.map((profesor) =>
            profesor.Lesson.map((lesson, index) =>
              this.props.ADDLessonTable({
                id: '' + this.props.initionalData.numberOfLesson,
                name_Lesson: lesson,
                nameAndFamily_Profesor: profesor.name+' '+profesor.familyName,

              })
            )
          );

    let columnsinitdata=["columns 0"];
    let counter=1;
          for(let i=1;i<this.state.days.length;i++){
            for(let j=0;j<this.state.time.length;j++){
            columnsinitdata.push("columns "+counter++);
            }
          }




          columnsinitdata.map((column,index)=>
          index!=0? this.props.ADDColumnsTable({
            id: '' + column,
            id_Lesson: []
          }):
          this.props.ADDColumnsTable({
            id: '' + column,
            id_Lesson: this.props.initionalData.Lesson.map((lesson) => lesson.id+' lesson')
          })

          )
          this.props.initionalData.numberOfColumn+=columnsinitdata.length;


          this.props.ADDColumnsOrderTable({
            id_columns: columnsinitdata,

            })

        }, 500);

  }
  render() {
    return (
      <div className="mainTableOfLesson">
        <DragDropContext onDragEnd={this.onDragEnd} >
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
                    {this.state.days.map((days, index) => {
                      return (
                        <tr key={index}>
                          <td colSpan="4">{days}</td>

                          {index == 0 ? this.state.time.map((times, index) => {
                            return (

                              <td key={index} colSpan="4"> {times.split(' ')[0]}
                                <br />
                                {times.split(' ')[1]}</td>

                            )


                          })
                            :
                            this.state.time.map((times, index) => {
                              return (

                                <td key={index} colSpan="4"> </td>

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
        </DragDropContext>
      </div>
    );
  }
}
const msp = ({ initionalData, persons }) => ({ initionalData, persons });
export default connect(
  msp,
  { getPerson, ADDColumnsOrderTable, ADDColumnsTable, ADDLessonTable }
)(TableOfLessson);