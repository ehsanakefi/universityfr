import React from "react";
import { connect } from "react-redux";
import { getPerson } from "../../actions/ProfesorAct";
import { ADDLessonTable } from '../../actions/initionalDataAct'
import "../../css/TableOfLessson.css";
import noimage from "../../image/noimage.jpg";
import notification from "../../image/notification.png";
import searchIcon from "../../image/searchTool.png";
import ProfesorInformation from './profesorInformation'
class TableOfLessson extends React.Component {
  constructor(props) {
    super(props);

  }

  
  componentWillMount() {
    this.props.getPerson();

   setTimeout(() => {
    this.props.persons.persons.map((profesor)=>
    profesor.Lesson.map((lesson,index)=>
    this.props.ADDLessonTable({
      id: ''+this.props.initionalData.number,
            name_Lesson: lesson,
            name_Profesor: profesor.name
    })
    )
    )
   }, 2000);
    
  }
  render() {
    return (
      <div className="mainTableOfLesson">
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

              <ul className="listProfesor_TOL">
                {this.props.persons.persons.map(
                  (profesor) => {
                    return profesor.Lesson.map((lesson, index) => {
                      return (<ProfesorInformation Lesson={lesson} Profesor={profesor}></ProfesorInformation>

                        // <li key={index} id="drag1" draggable={true} onDragStart={this.drag.bind(this)} className="listOneOFProfesor_TOL">
                        // <div className="listOneOFProfesorNameLesson_TOL">{lesson}</div>
                        // <div className="listOneOFProfesorProfile_TOL">
                        // <img src={noimage} className="imglistOneOFProfesor_TOL" alt="NotFound"/>
                        // <p className="listOneOFProfesorNameProfesor_TOL"> {profesor.name} {profesor.familyName}</p>
                        // </div>
                        // </li>
                      )
                    })

                  }

                )}
              {
                console.log(this.props.initionalData.Lesson)
              }
              
              </ul>
            </div>
          </div>
          <div className="rightTableDays_TOL">
            <div className="centerLeftTableDays_TOL">
              <table>
                <tbody>
                  <tr>
                    <td colSpan="4"> ساعت / روز</td>

                    <td colSpan="4"> 7:00
                  <br />
                      8:00</td>
                    <td colSpan="4"> 8:00
                  <br />
                      9:00
                  </td>
                    <td colSpan="4"> 9:00
                  <br />
                      10:00</td>

                    <td colSpan="4"> 10:00
                  <br />
                      11:00</td>

                    <td colSpan="4"> 11:00
                  <br />
                      12:00</td>

                    <td colSpan="4"> 12:00
                  <br />
                      13:00</td>

                    <td colSpan="4"> 13:00
                  <br />
                      14:00</td>
                    <td colSpan="4"> 14:00
                  <br />
                      15:00</td>

                    <td colSpan="4"> 15:00
                  <br />
                      16:00</td>
                    <td colSpan="4"> 16:00
                  <br />
                      17:00</td>
                    <td colSpan="4"> 17:00
                  <br />
                      18:00</td>
                    <td colSpan="4"> 18:00
                  <br />
                      19:00</td>
                    <td colSpan="4"> 19:00
                  <br />
                      20:00</td>
                  </tr>
                  <tr>
                    <td colSpan="4">شنبه</td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>

                  </tr>
                  <tr>
                    <td colSpan="4">یکشنبه</td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                  </tr>
                  <tr>
                    <td colSpan="4">دوشنبه</td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                  </tr>
                  <tr>
                    <td colSpan="4">سه شنبه</td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                  </tr>
                  <tr>
                    <td colSpan="4">چهارشنبه</td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                  </tr>
                  <tr>
                    <td colSpan="4">پنجشنبه</td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                  </tr>
                  <tr>
                    <td colSpan="4" >جمعه</td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                    <td colSpan="4" ></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const msp = ({ initionalData, persons }) => ({ initionalData, persons });
export default connect(
  msp,
  { getPerson ,ADDLessonTable}
)(TableOfLessson);