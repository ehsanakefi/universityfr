import React from "react";
import "../../css/addprofesors.css";
import Navigation from '../nav/navigation';
import Profesor from '../profersor/profesor';
import Noimageperson from '../../image/noimage.png';
import Addimgprofesor from '../../image/adduser.png';
import Oldschool from '../../image/oldschool.png';
import Searchimg from '../../image/Search.png';
import Openbook from '../../image/openbook.png';
import Classroom from '../../image/classroom.png';
import Calendar from '../../image/calendar.png';
import Settingimg from '.../../image/settings.png';
import Clocktime from '../../image/clocktime.png';
import Booksthree from '../../image/booksthree.png';
import Brand from "../../image/brand.png";
import Detail from "../detail/detail";

import {Link} from 'react-router-dom';
import { connect } from 'react-redux'



     class addprofesor extends React.Component{
        constructor(props){
            super(props);
            this.clickbox = this.clickbox.bind(this);
              
            }
           
        
       clickbox(e){
        this.setState({datacurrent:e});
       }
       componentDidMount(){
        const profseors = JSON.parse(localStorage.getItem('profseors')) || [];
  
        this.setState({ profseors, datacurrent: profseors[0] });
        setTimeout(() => {
            console.log(this.state.profseors);

        }, 1000);
         
    }
       
        render() {
            return (
                <div className="main">
                
                    <Navigation/>
                    <div className="person">
                        <div className="header">
                        <div className="direct">
                         <p>صفحه اصلی  >  اضافه کردن استاد</p>
                         </div>
                        <div className="brand">  <img src={Brand} alt="notFind:)"></img></div>
                         
                        </div>
                        <div className="center">
                        <div className="center_right">
                        <div className="search_add">
                            <div className="search">
                                <input className="searchinput w3-input" type="text"  placeholder="جستوجو کنید:)"/>
                            </div>
                            
                        </div>
                        <div className="addprofesorcenter">
                            {this.state.profseors.map((person,i) =>
                             {return<Profesor key={i} onClick={this.clickbox} person={person} />})
                            }
                            <div className="add">
                                <Link to="/register" ><button className="button_Add w3-input">+</button></Link>
                            </div>
                            </div>
                            </div>
                            <div className="center_left">
                            <Detail data={this.state.datacurrent} />
                            </div>
                           
                            
                            
                       
                        
                        </div>
                        
                        
                       
                    </div>

            
                </div>
                
            );
          }
 
        }
             
         
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

class AddProfesor extends React.Component{
    constructor({props}) {
        super(props)

    }
    render(){
        return (
            <div className="main">
                <div className="dashbord">
                    <div className="dashbord_header">
                        <div className="dashbord_header_imgprofile">
                        <img className="dashbord_header_imgprofile_img" src={Noimageperson} alt="notfound"/>
                        </div>
                        <div className="dashbord_header_nameprofile">احسان عاکفی</div>
                        <div className="dashbord_header_setting">
                        <img className="dashbord_header_setting_img" src={Settingimg} alt="notFound" />
                        </div>
                    </div>
                    <div className="Line_sepreat">
                        <div className="Line"></div>
                    </div>
                    <div className="dashbord_icons">
                        <div className="dashbord_icons_box_selected">
                            <div className="dashbord_icons_box_img">
                                <img className="dashbord_icons_box_selected_img_icon" src={Addimgprofesor} alt="notFound" />
                            </div>
                            <div className="dashbord_icons_box_text">
                                <p className="dashbord_icons_box_text_add">اضافه کردن استاد</p>
                            </div>
                        </div>
                        <div className="dashbord_icons_box">
                            <div className="dashbord_icons_box_img">
                                <img className="dashbord_icons_box_selected_img_icon" src={Oldschool} alt="notFound" />
                            </div>
                            <div className="dashbord_icons_box_text">
                                <p className="dashbord_icons_box_text_icon">اضافه کردن گروه ها</p>
                            </div>
                        </div>
                        <div className="dashbord_icons_box">
                            <div className="dashbord_icons_box_img">
                                <img className="dashbord_icons_box_selected_img_icon" src={Classroom} alt="notFound" />
                            </div>
                            <div className="dashbord_icons_box_text">
                                <p className="dashbord_icons_box_text_icon">مشخص کردن کلاس ها</p>
                            </div>
                        </div>
                        <div className="dashbord_icons_box">
                        <div className="dashbord_icons_box_img">
                                <img className="dashbord_icons_box_selected_img_icon" src={Openbook} alt="notFound" />
                            </div>
                            <div className="dashbord_icons_box_text">
                                <p className="dashbord_icons_box_text_icon">مشخص کردن درس ‏ها</p>
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
                        <Link to="/register" > <p className="profesorsadd_header_plus_text">+</p></Link>
                        </div>
                    </div>
                    <div className="profesorsadd_search">
                        <div className="profesorsadd_search_box">
                            <div className="profesorsadd_search_box_img">
                                <img className="profesorsadd_search_box_img_icon" src={Searchimg} alt="Notfound" />
                            </div>
                            <div className="profesorsadd_search_box_text"><input className="profesorsadd_search_box_text_input" type="text"></input> </div>
                        </div>
                    </div>
                    <div className="profesorsadd_profesor">
                    {console.log(this.props.persons.persons)}
                    {this.props.persons.persons.map((person,i) =>
                       {return<Profesor key={i} person={person} />})
                      }
                      
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
                            <div className="details_up_threebox_img"><img className="details_up_threebox_img_icon" src={Clocktime} alt="Notfound"/></div>
                            <div className="details_up_threebox_LH">25</div>
                            <div className="details_up_threebox_text">ساعت</div>
                        </div>
                        <div className="details_up_threebox">
                            <div className="details_up_threebox_img"><img className="details_up_threebox_img_icon" src={Booksthree} alt="Notfound"/></div>
                            <div className="details_up_threebox_LH">4</div>
                            <div className="details_up_threebox_text">درس</div>
                        </div>
                        <div className="details_up_threebox">
                            <div className="details_up_threebox_img"><img className="details_up_threebox_img_icon" src={Calendar} alt="Notfound"/></div>
                            <div className="details_up_days_day">
                                <div className="details_up_days_day_left">
                                    <p className="details_up_days_day_text">شنبه</p>
                                    <p className="details_up_days_day_text">یکشنبه</p>
                                    <p className="details_up_days_day_text">دوشنبه</p>
                                </div>
                                <div className="details_up_days_day_right">
                                    <p className="details_up_days_day_text">سه شنبه</p>
                                    <p className="details_up_days_day_text">چهارشنبه</p>
                                    <p className="details_up_days_day_text">پنجشنبه</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="details_down">
                        <div className="details_down_lessons">
                        <p className="details_down_lessons_text">طراحی الگوریتم</p>
                        <div className="Line_sepreat">
                        <div className="Line"></div>
                    </div>
                        <p className="details_down_lessons_text">ساختمان داده</p>
                        <div className="Line_sepreat">
                        <div className="Line"></div>
                    </div>
                        <p className="details_down_lessons_text">ریز پردازنده</p>
                        <div className="Line_sepreat">
                        <div className="Line"></div>
                    </div>
                        <p className="details_down_lessons_text">شبکه کامپیوتر</p>
                        <div className="Line_sepreat">
                        <div className="Line"></div>
                    </div>
                        </div>
                        <div className="details_down_table"></div>
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
        )}
    }
    

const msp = ({persons}) => ({persons});

export default connect(msp)(AddProfesor);