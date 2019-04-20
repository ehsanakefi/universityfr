import React from "react";
import { connect } from "react-redux";
import { getPerson } from "../../actions/ProfesorAct";
import "../../css/TableOfLessson.css";
import noimage from "../../image/noimage.jpg";
import notification from "../../image/notification.png";
import searchIcon from "../../image/searchTool.png";
import ProfesorInformation from './profesorInformation'
class TableOfLessson extends React.Component {
  constructor(props) {
    super(props);
  }
  drag(ev) {
    console.log(ev.target.id)
    ev.dataTransfer.setData("id", ev.target.id);
  }
  allowDrop(ev) {
    ev.preventDefault();
  }
 drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("id");
    ev.target.appendChild(document.getElementById(data));
  }
  componentWillMount(){
    this.props.getPerson();
    console.log(this.props.persons.persons)
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
                  (profesor)=>{
                    return profesor.Lesson.map((lesson,index)=>{
                      return(<ProfesorInformation Lesson={lesson} Profesor={profesor}></ProfesorInformation>
                      
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
                
            </ul>
            </div>
          </div>
          <div className="rightTableDays_TOL">
            <div className="centerLeftTableDays_TOL">
              <table>
              <tbody>
                <tr>
                  <th />
                  <th>شنبه</th>
                  <th>یکشنبه</th>
                  <th>دوشنبه</th>
                  <th>سه شنبه</th>
                  <th>چهارشنبه</th>
                  <th>پنجشنبه</th>
                </tr>
                <tr>
                  <th>8:00-9:30</th>
                  <td  id="div1" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)} />
                  <td id="div2" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}/>
                  <td/>
                  <td />
                  <td />
                  <td />
                </tr>
                <tr>
                  <th>9:30-11:00</th>
                  <td  id="div1" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)} />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
                <tr>
                  <th>11:00-12:30</th>
                  <td id="div1" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}/>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
                <tr>
                  <th>12:30-14:00</th>
                  <td id="div1" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}/>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
                <tr>
                  <th>14:00-16:00</th>
                  <td id="div1" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}/>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
                <tr>
                  <th>16:00-18:00</th>
                  <td id="div1" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}/>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
                <tr>
                  <th>18:00-20:00</th>
                  <td id="div1" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}/>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
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
const msp = ({ persons }) => ({ persons });
export default connect(
  msp,
  { getPerson }
)(TableOfLessson);