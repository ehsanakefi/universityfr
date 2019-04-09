import React from "react";
import "../../css/addprofesors.css";
import Profesor from "../profersor/profesor";
import Noimageperson from "../../image/noimage.png";
import Noimageprofesor from "../../image/noimage.jpg";
import Addimgprofesor from "../../image/adduser.png";
import Oldschool from "../../image/oldschool.png";
import Searchimg from "../../image/Search.png";
import Openbook from "../../image/openbook.png";
import Classroom from "../../image/classroom.png";
import Calendar from "../../image/calendar.png";
import Settingimg from "../../image/settings.png";
import Clocktime from "../../image/clocktime.png";
import professorimg from "../../image/professor.png";
import Booksthree from "../../image/booksthree.png";
import Brand from "../../image/brand.png";
import Detail from "../detail/detail";
import LogOut from "../../image/logout.png";
import { getPerson } from "../../actions/ProfesorAct";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { GET_PERSONS } from "../../actions/types";
//  class addprofesor extends React.Component{
//     constructor(props){
//         super(props);
//         this.clickbox = this.clickbox.bind(this);

//         }

//    clickbox(e){
//     this.setState({datacurrent:e});
//    }
//    componentDidMount(){
//     const profseors = JSON.parse(localStorage.getItem('profseors')) || [];

//     this.setState({ profseors, datacurrent: profseors[0] });
//     setTimeout(() => {
//         console.log(this.state.profseors);

//     }, 1000);

// }

//     render() {
//         return (
//             <div className="main">

//                 <Navigation/>
//                 <div className="person">
//                     <div className="header">
//                     <div className="direct">
//                      <p>صفحه اصلی  >  اضافه کردن استاد</p>
//                      </div>
//                     <div className="brand">  <img src={Brand} alt="notFind:)"></img></div>

//                     </div>
//                     <div className="center">
//                     <div className="center_right">
//                     <div className="search_add">
//                         <div className="search">
//                             <input className="searchinput w3-input" type="text"  placeholder="جستوجو کنید:)"/>
//                         </div>

//                     </div>
//                     <div className="addprofesorcenter">
//                         {this.state.profseors.map((person,i) =>
//                          {return<Profesor key={i} onClick={this.clickbox} person={person} />})
//                         }
//                         <div className="add">
//                             <Link to="/register" ><button className="button_Add w3-input">+</button></Link>
//                         </div>
//                         </div>
//                         </div>
//                         <div className="center_left">
//                         <Detail data={this.state.datacurrent} />
//                         </div>

//                     </div>

//                 </div>

//             </div>

//         );
//       }

//     }

//     return(

//         <div className="main">
//             <Navigation />
//             <div className="person"></div>
//             <div></div>
//         </div>
//     );

// class profesor extends React.Component{
//     constructor(props){
// super(props);
// this.state={

// };

// }

// }

class AddProfesor extends React.Component {
  constructor({ props }) {
    super(props);
    this.state = {
      showMenu: false,
      selectprofesor: -1,
      total: 0,
      days: []
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.timeStringToFloat = this.timeStringToFloat.bind(this);
    this.timeFloatToString = this.timeFloatToString.bind(this);
  }
  timeStringToFloat(time) {
    var hoursMinutes = time.split(/[.:]/);
    var hours = parseInt(hoursMinutes[0], 10);
    var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    console.log("hours" + hours + " minutes" + minutes);
    return hours + minutes / 60;
  }
  componentWillMount() {
    this.props.getPerson();
  }
  timeFloatToString(hour) {
    let floor = Math.floor(hour);
    let min = Math.round((hour - floor) * 60);
    console.log(min);
    return "" + floor + ":" + (min / 10 < 1 ? "0" + min : min);
  }
  clickProfesor(index) {
    let days = this.props.persons.persons[index].day;
    let namedays = [];
    days.map(days =>
      namedays.includes(days.nameday) ? null : namedays.push(days.nameday)
    );
    this.setState({
      ...this.state,
      days: namedays,
      total: this.timeFloatToString(
        days.reduce(
          (accumulator, currentValue) =>
            this.timeStringToFloat(currentValue.endTime) -
            this.timeStringToFloat(currentValue.startTime) +
            accumulator,
          0
        )
      ),
      selectprofesor: index
    });
  }
  showMenu(event) {
    event.preventDefault();
    this.setState(
      {
        ...this.state,
        showMenu: true
      },
      () => {
        document.addEventListener("click", this.closeMenu);
      }
    );
  }
  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState(
        {
          ...this.state,

          showMenu: false
        },
        () => {
          document.removeEventListener("click", this.closeMenu);
        }
      );
    }
  }
  render() {
    return (
      <div className="main">
        <div className="dashbord">
          <div className="dashbord_header">
            <div className="dashbord_header_imgprofile">
              <img
                className="dashbord_header_imgprofile_img"
                src={Noimageperson}
                alt="notfound"
              />
            </div>
            <div className="dashbord_header_nameprofile">
              {this.props.auth.user.name}
            </div>
            <div className="dashbord_header_setting">
              <div>
                <img
                  onClick={this.showMenu}
                  className="dashbord_header_setting_img"
                  src={Settingimg}
                  alt="notFound"
                />

                {this.state.showMenu ? (
                  <div
                    className="menu"
                    ref={element => {
                      this.dropdownMenu = element;
                    }}
                  >
                    <div className="menulogout">
                      {" "}
                      <img
                        className="imgmenulogout"
                        src={LogOut}
                        alt="notFound"
                      />{" "}
                      <div className="textlogout">خروج</div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="Line_sepreat">
            <div className="Line" />
          </div>
          <div className="dashbord_icons">
            <div className="dashbord_icons_box_selected">
              <div className="dashbord_icons_box_img">
                <img
                  className="dashbord_icons_box_selected_img_icon"
                  src={Addimgprofesor}
                  alt="notFound"
                />
              </div>
              <div className="dashbord_icons_box_text">
                <p className="dashbord_icons_box_text_add">صفحه اصلی</p>
              </div>
            </div>
            <div className="dashbord_icons_box">
              <div className="dashbord_icons_box_into">
                <div className="dashbord_icons_box_img">
                  <img
                    className="dashbord_icons_box_selected_img_icon"
                    src={professorimg}
                    alt="notFound"
                  />
                </div>
                <div className="dashbord_icons_box_text">
                  <p className="dashbord_icons_box_text_icon">
                    تنظیمات اولیه دانشگاه{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="dashbord_icons_box">
              <div className="dashbord_icons_box_into">
                <div className="dashbord_icons_box_img">
                  <img
                    className="dashbord_icons_box_selected_img_icon"
                    src={professorimg}
                    alt="notFound"
                  />
                </div>
                <div className="dashbord_icons_box_text">
                  <p className="dashbord_icons_box_text_icon">
                    اضافه کردن استاد
                  </p>
                </div>
              </div>
            </div>
            <div className="dashbord_icons_box">
              <div className="dashbord_icons_box_into">
                <div className="dashbord_icons_box_img">
                  <img
                    className="dashbord_icons_box_selected_img_icon"
                    src={Oldschool}
                    alt="notFound"
                  />
                </div>
                <div className="dashbord_icons_box_text">
                  <p className="dashbord_icons_box_text_icon">
                    اضافه کردن گروه ها
                  </p>
                </div>
              </div>
            </div>
            <div className="dashbord_icons_box">
              <div className="dashbord_icons_box_into">
                <div className="dashbord_icons_box_img">
                  <img
                    className="dashbord_icons_box_selected_img_icon"
                    src={Classroom}
                    alt="notFound"
                  />
                </div>
                <div className="dashbord_icons_box_text">
                  <p className="dashbord_icons_box_text_icon">
                    مشخص کردن کلاس ها
                  </p>
                </div>
              </div>
            </div>
            <div className="dashbord_icons_box">
              <div className="dashbord_icons_box_into">
                <div className="dashbord_icons_box_img">
                  <img
                    className="dashbord_icons_box_selected_img_icon"
                    src={Openbook}
                    alt="notFound"
                  />
                </div>
                <div className="dashbord_icons_box_text">
                  <p className="dashbord_icons_box_text_icon">
                    مشخص کردن درس ‏ها
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="profesorsadd">
          <div className="profesorsadd_header">
            <div className="profesorsadd_header_text">
              <p className="profesorsadd_header_text_add">اضافه کردن استاد</p>
            </div>
            <div className="profesorsadd_header_plus">
              <Link to="/register">
                {" "}
                <p className="profesorsadd_header_plus_text">+</p>
              </Link>
            </div>
          </div>
          <div className="profesorsadd_search">
            <div className="profesorsadd_search_box">
              <div className="profesorsadd_search_box_img">
                <img
                  className="profesorsadd_search_box_img_icon"
                  src={Searchimg}
                  alt="Notfound"
                />
              </div>
              <div className="profesorsadd_search_box_text">
                <input
                  className="profesorsadd_search_box_text_input"
                  type="text"
                />{" "}
              </div>
            </div>
          </div>
          <div className="profesorsadd_profesor">
            {this.props.persons.persons.map((profesor, index) => {
              return (
                <div
                  key={index}
                  onClick={this.clickProfesor.bind(this, index)}
                  className="list_profesorsadd_profesor"
                >
                  <div className="image_profesorsadd_profesor">
                    <img
                      className="img_image_profesorsadd_profesor"
                      src={Noimageprofesor}
                      alt="NotFound:)"
                    />
                  </div>
                  <div className="name_profesorsadd_profesor">
                    <p className="p_name_profesorsadd_profesor">
                      {profesor.name} {profesor.familyName}
                    </p>
                  </div>
                </div>
              );
            })}
            {/* <div className="profesorsadd_profesor_box">
                            <div className="profesorsadd_profesor_box_img"><img className="profesorsadd_profesor_box_img_profile" src={Noimageperson}/></div>
                            <div className="profesorsadd_profesor_box_Specifications">
                                <div className="profesorsadd_profesor_box_Specifications_name">یونس اسماعیلی</div>
                                <div className="profesorsadd_profesor_box_Specifications_phone">09183152961</div>
                            </div>                            
                        </div>
                        <div className="profesorsadd_profesor_box">
                            <div className="profesorsadd_profesor_box_img"><img className="profesorsadd_profesor_box_img_profile" src={Noimageperson}/></div>
                            <div className="profesorsadd_profesor_box_Specifications">
                                <div className="profesorsadd_profesor_box_Specifications_name">امین رضایی</div>
                                <div className="profesorsadd_profesor_box_Specifications_phone">09183152961</div>
                            </div>                            
                        </div>
                        <div className="profesorsadd_profesor_box">
                            <div className="profesorsadd_profesor_box_img"><img className="profesorsadd_profesor_box_img_profile" src={Noimageperson}/></div>
                            <div className="profesorsadd_profesor_box_Specifications">
                                <div className="profesorsadd_profesor_box_Specifications_name">حسین قیتاسی</div>
                                <div className="profesorsadd_profesor_box_Specifications_phone">09183152961</div>
                            </div>                            
                        </div>
                        <div className="profesorsadd_profesor_box">
                            <div className="profesorsadd_profesor_box_img"><img className="profesorsadd_profesor_box_img_profile" src={Noimageperson}/></div>
                            <div className="profesorsadd_profesor_box_Specifications">
                                <div className="profesorsadd_profesor_box_Specifications_name">رضا قادری</div>
                                <div className="profesorsadd_profesor_box_Specifications_phone">09183152961</div>
                            </div>                            
                        </div>
                        <div className="profesorsadd_profesor_box">
                            <div className="profesorsadd_profesor_box_img"><img className="profesorsadd_profesor_box_img_profile" src={Noimageperson}/></div>
                            <div className="profesorsadd_profesor_box_Specifications">
                                <div className="profesorsadd_profesor_box_Specifications_name">محمد محمدی</div>
                                <div className="profesorsadd_profesor_box_Specifications_phone">09183152961</div>
                            </div>                            
                        </div> */}
          </div>
        </div>
        <div className="details">
          <div className="details_up">
            <div className="details_up_threebox">
              <div className="details_up_threebox_img">
                <img
                  className="details_up_threebox_img_icon"
                  src={Clocktime}
                  alt="Notfound"
                />
              </div>
              {this.state.selectprofesor != -1 ? (
                <div className="details_up_threebox_LH">{this.state.total}</div>
              ) : (
                <div className="details_up_threebox_LH" />
              )}

              <div className="details_up_threebox_text">ساعت</div>
            </div>
            <div className="details_up_threebox">
              <div className="details_up_threebox_img">
                <img
                  className="details_up_threebox_img_icon"
                  src={Booksthree}
                  alt="Notfound"
                />
              </div>
              {this.state.selectprofesor != -1 ? (
                <div className="details_up_threebox_LH">
                  {
                    this.props.persons.persons[this.state.selectprofesor].Lesson
                      .length
                  }
                </div>
              ) : (
                <div className="details_up_threebox_LH" />
              )}
              <div className="details_up_threebox_text">درس</div>
            </div>
            <div className="details_up_threebox">
              <div className="details_up_threebox_img">
                <img
                  className="details_up_threebox_img_icon"
                  src={Calendar}
                  alt="Notfound"
                />
              </div>

              <div className="details_up_days_day">
                {this.state.selectprofesor != -1 ? (
                  this.state.days.map(day => (
                    <p className="details_up_days_day_text">{day}</p>
                  ))
                ) : (
                  <p className="details_up_days_day_text" />
                )}
              </div>
            </div>
          </div>
          <div className="details_down">
            <div className="details_down_lessons">
              {this.state.selectprofesor != -1 ? (
                this.props.persons.persons[
                  this.state.selectprofesor
                ].Lesson.map(Lesson => {
                  return <p className="details_down_lessons_text">{Lesson}</p>;
                })
              ) : (
                <p className="details_down_lessons_text" />
              )}
            </div>
            <div className="details_down_table">
              <div className="details_down_table_center">
              <div className="details_down_table_center_header">
              <div className="details_down_table_center_header_az">از</div>
              <div className="details_down_table_center_header_ta">تا</div>
              <div className="details_down_table_center_header_day">روز</div>
              </div>
               <div className="details_down_table_center_body">
                {this.state.selectprofesor != -1 ? (
              this.props.persons.persons[this.state.selectprofesor].day.map((day,index) =>{return(
               
                <ul key={index} className="details_down_table_center_body_Lits_days">
                <li className="details_down_table_center_body_StartAndEndTime">{day.startTime}</li>
                <li className="details_down_table_center_body_StartAndEndTime">{day.endTime}</li>
                <li className="details_down_table_center_body_nameday">{day.nameday}</li>
              </ul>)


              
                  })
                ) : (
                  <p className="details_up_days_day_text" />
                )}
              </div></div>
            </div>
          </div>
        </div>
      </div>
      //     <div className="main">

      //     <Navigation/>
      //     <div className="person">
      //         <div className="header">
      //         <div className="direct">
      //          <p>صفحه اصلی  >  اضافه کردن استاد</p>
      //          </div>
      //         <div className="brand">  <img src={Brand} alt="notFind:)"></img></div>

      //         </div>
      //         <div className="center">
      //         <div className="center_right">
      //         <div className="search_add">
      //             <div className="search">
      //                 <input className="searchinput w3-input" type="text"  placeholder="جستوجو کنید:)"/>
      //             </div>

      //         </div>
      //         <div className="addprofesorcenter">
      //         {console.log(this)}
      //             {this.props.persons.persons.map((person,i) =>
      //              {return<Profesor key={i} person={person} />})
      //             }
      //             <div className="add">
      //                 <Link to="/register" ><button className="button_Add w3-input">+</button></Link>
      //             </div>
      //             </div>
      //             </div>
      //             <div className="center_left">
      //             <Detail data={this.props.persons.currentPerson} />
      //             </div>

      //         </div>

      //     </div>

      // </div>
    );
  }
}

const msp = ({ persons, auth }) => ({ persons, auth });

export default connect(
  msp,
  { getPerson }
)(AddProfesor);
