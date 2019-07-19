import React from 'react';
import '../css/NewProfesors.css'
import ToolBar from '../ToolBar'
import Menu from '../menu';
 import garbage from '../image/garbage.png';
 import person from '../image/man2.jpg';
 import man1 from '../image/man1.jpg'; 
 import man2 from '../image/man3.jpg';
 import Doughnut from '../Statistics/Doughnut'
 import heart from '../image/heart.png'

class Profesor extends React.Component {

    render() {
        return (
            <div className="main_NP">
                <div className="right_NP">
                    <Menu />
                    <ToolBar />
                </div>

                <div className="left_NP">
                    <div className="leftUp_NP">
                   <div className="headerReviewStatistics_NP_">
                   <p className="reviewStatistics_NP">مرور بر آمار</p>
                   </div>
                   <div className="bodyLeftUp_NP">
                   <div className="boxStatistics_NP">
                            <div className="headerListProfesor_PH">
                                <div className="headerListProfesorblueColor_PH"></div>
                                <p className="TextHeader_PH">درس</p>
                            </div>
                            <div className="infoBodyListProfesor_PH"> <Doughnut size={120}/></div>
                        </div>
                        <div className="boxStatistics_NP">
                            <div className="headerListProfesor_PH">
                                <div className="headerListProfesorblueColor_PH"></div>
                                <p className="TextHeader_PH">زمان</p>
                            </div>
                            <div className="infoBodyListProfesor_PH"> <Doughnut  size={120}/></div>
                        </div>
                        <div className="boxStatistics_NP">
                            <div className="headerListProfesor_PH">
                                <div className="headerListProfesorblueColor_PH"></div>
                                <p className="TextHeader_PH">هفته</p>
                            </div>
                            <div className="infoBodyListProfesor_PH"><Doughnut  size={120}/></div>
                        </div>
                        <div className="boxStatistics_NP">
                            <div className="headerListProfesor_PH">
                                <div className="headerListProfesorblueColor_PH"></div>
                                <p className="TextHeader_PH">کلاس</p>
                            </div>
                            <div className="infoBodyListProfesor_PH"><Doughnut  size={120}/></div>
                        </div>
                   </div>
                    </div>
                    <div className="leftDown_NP">
                        <div className="ProfesorInfor_PH">
                            <div className="headerProfesorInfor_PH">
                               
                                <img className="imagegarbage" src={garbage} alt="NotFound"/>
                                <img className="imagegarbage" src={heart} alt="NotFound"/>

                            </div>
                            <div className="photoProfesorInfor_PH">
                                <img src={man2} className="photoProfesorInforIamge_PH" alt="NotFound"/>

                            </div>
                            <div className="NameProfesorInfor_PH">
                            <p className="NameAndFimilyProfesorInfor_PH">آرمین نصرتی</p>
                            <p className="NameProfesorInforType_PH">مدعو</p>                            
                            </div>
                            <div className="detailProfesorInfor_PH">
                            <p className="detailProfesorInforGrade_PH">دکترا</p>
                            <p className="detailProfesorInforHistorAdd_PH">اسفند 23</p>                            
                            </div>
                            <div className="buttonProfesorInfor_PH">
                            <button className="button_PH">مشاهده جزییات</button>
                            </div>
                        </div>
                        <div className="ProfesorInfor_PH">
                            <div className="headerProfesorInfor_PH">
                                        
                            <img className="imagegarbage" src={garbage} alt="NotFound"/>
                                <img className="imagegarbage" src={heart} alt="NotFound"/>
                            </div>
                            <div className="photoProfesorInfor_PH">
                                <img src={person} className="photoProfesorInforIamge_PH" alt="NotFound"/>

                            </div>
                            <div className="NameProfesorInfor_PH">
                            <p className="NameAndFimilyProfesorInfor_PH">رضا قادری</p>
                            <p className="NameProfesorInforType_PH">مدعو</p>                            
                            </div>
                            <div className="detailProfesorInfor_PH">
                            <p className="detailProfesorInforGrade_PH">دکترا</p>
                            <p className="detailProfesorInforHistorAdd_PH">اسفند 23</p>                            
                            </div>
                            <div className="buttonProfesorInfor_PH">
                            <button className="button_PH">مشاهده جزییات</button>
                            </div>
                        </div> 
                         <div className="ProfesorInfor_PH">
                            <div className="headerProfesorInfor_PH">                   
                                <img className="imagegarbage" src={garbage} alt="NotFound"/>
                                <img className="imagegarbage" src={heart} alt="NotFound"/>
                            </div>
                            <div className="photoProfesorInfor_PH">
                                <img src={man1} className="photoProfesorInforIamge_PH" alt="NotFound"/>

                            </div>
                            <div className="NameProfesorInfor_PH">
                            <p className="NameAndFimilyProfesorInfor_PH">شهاب مظفری</p>
                            <p className="NameProfesorInforType_PH">مدعو</p>                            
                            </div>
                            <div className="detailProfesorInfor_PH">
                            <p className="detailProfesorInforGrade_PH">فوق لیسانس</p>
                            <p className="detailProfesorInforHistorAdd_PH">اسفند 23</p>                            
                            </div>
                            <div className="buttonProfesorInfor_PH">
                            <button className="button_PH">مشاهده جزییات</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Profesor;