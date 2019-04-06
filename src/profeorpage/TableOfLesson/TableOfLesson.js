import React from "react";
import "../../css/TableOfLessson.css";
import noimage from "../../image/noimage.jpg";
import notification from "../../image/notification.png";
import searchIcon from "../../image/searchTool.png";
class TableOfLessson extends React.Component {
  constructor(props) {
    super(props);
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
                <li className="listOneOFProfesor_TOL">
                <div className="listOneOFProfesorNameLesson_TOL">ساختمان داده</div>
                <div className="listOneOFProfesorProfile_TOL">
                <img src={noimage} className="imglistOneOFProfesor_TOL" alt="NotFound"/>
                <p className="listOneOFProfesorNameProfesor_TOL"> احسان عاکفی</p>
                </div>
                </li>
            </ul>
            </div>
          </div>
          <div className="rightTableDays_TOL">
            <div className="centerLeftTableDays_TOL">
              <table>
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
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
                <tr>
                  <th>9:30-11:00</th>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
                <tr>
                  <th>11:00-12:30</th>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
                <tr>
                  <th>12:30-14:00</th>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
                <tr>
                  <th>14:00-16:00</th>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
                <tr>
                  <th>16:00-18:00</th>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
                <tr>
                  <th>18:00-20:00</th>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TableOfLessson;
