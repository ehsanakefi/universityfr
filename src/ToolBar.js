import React from 'react';
import './css/ToolBar.css'
import Person from './image/EhsanAkefi.jpg';
import Book from './image/book.png';
import Teacher from './image/teacher.png';
import Time from './image/time.png';
export default class ToolBar extends React.Component{
    
    render(){
        return(
            <div className="profile_PH">
            <div className="infoEmailNamePhoto_PH">
                <img className="userProfile_PH" alt="NotFound" src={Person} />
                <p className="nameInfo_PH">احسان عاکفی</p>
                <p className="gmailInfo_PH">ehsan.akefi@gmail.com</p>
                <button className="btnAddProfesor_PH">اضافه کردن استاد</button>
            </div>

            <div className="inforProfesorLesson_PH">
                <div className="boxinfoProLess_PH">
                    <div className="boxinfoProLessBlueColor_PH"></div>
                    <div className="boxinfoProLessicon_PH">
                        <img className="boxInfoIcons_PH" alt="notfound" src={Book}></img>
                    </div>
                    <div className="boxinfoProLessText_PH">
                        <p className="boxText_PH">درس های ارایه شده</p>
                        <p className="BoxTextNumber">54</p>
                    </div>
                    <div className="boxinfoProLessRedColor_PH"></div>

                </div>
                <div className="boxinfoProLess_PH">
                    <div className="boxinfoProLessBlueColor_PH"></div>
                    <div className="boxinfoProLessicon_PH">
                        <img className="boxInfoIcons_PH" alt="notfound" src={Teacher}></img>
                    </div>
                    <div className="boxinfoProLessText_PH">
                        <p className="boxText_PH">اساتید</p>
                        <p className="BoxTextNumber">22</p>
                    </div>
                    <div className="boxinfoProLessRedColor1_PH"></div>

                </div>
                <div className="boxinfoProLess_PH">
                    <div className="boxinfoProLessBlueColor_PH"></div>
                    <div className="boxinfoProLessicon_PH">
                        <img className="boxInfoIcons_PH" alt="notfound" src={Time}></img>
                    </div>
                    <div className="boxinfoProLessText_PH">
                        <p className="boxText_PH">زمان</p>
                        <p className="BoxTextNumber">35</p>
                    </div>
                    <div className="boxinfoProLessRedColor2_PH"></div>

                </div>
            </div>
        </div>
        );
    }
}