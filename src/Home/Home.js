import React from 'react';
import '../css/home.css';

import Homeimge from '../image/home.png';
import Setting from '../image/setting.png';
import Profesor from '../image/profesor.png';
import Table from '../image/table.png';
import Person from '../image/person.png';
import Book from '../image/book.png';
import Teacher from '../image/teacher.png';
import Time from '../image/time.png';
import ColumnChart from '../Statistics/ColumnChart'
import Pie from '../Statistics/pie'
import Doughnut from '../Statistics/Doughnut'

class Home extends React.Component {

    render() {
        return (
            <div className="main_PH">
                <div className="right_PH">
                    <div className="informUserProfile_PH">
                        <div className="tool_PH">
                            <img className="icon" alt="Not found" src={Homeimge} />
                            <img className="icon" alt="Not found" src={Setting} />
                            <img className="icon" alt="Not found" src={Profesor} />
                            <img className="icon" alt="Not found" src={Table} />
                        </div>
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
                    </div>
                    <div className="information_PH">
                        <div className="infoStatistics_PH">
                            <div className="headerStatistics_PH">
                                <div className="headerStatisticsblueColor_PH"></div>
                                <p className="TextHeader_PH">آمار</p>
                            </div>
                            <div className="infoBodyStatistics_PH">
                                <Pie/>
                              
                            </div>

                        </div>
                        <div className="infoListProfesor_PH">
                            <div className="headerListProfesor_PH">
                                <div className="headerListProfesorblueColor_PH"></div>
                                <p className="TextHeader_PH">اساتید</p>
                            </div>
                            <div className="infoBodyListProfesor_PH"></div>

                        </div>

                    </div>

                </div>
                <div className="left_PH">
                    <div className="leftUP_PH">
                        <div className="StatisticsNumberProfesor_PH">
                            <div className="headerStatisticsNumPro_PH">
                                <div className="headerStatisticsNumProblueColor_PH"></div>
                                <p className="TextHeader_PH">تعداد اساتید در هفته</p>

                            </div>
                            <div className="bodyStatisticsNumberProfesor_PH">
                            <ColumnChart />
                            </div>

                        </div>
                        <div className="fourStatistics_PH">
                            <div className="fourStatisticsUp_PH">
                                <div className="statisticsTypeProfesor_PH">
                                    <div className="headerStatisticsTypeProfesor_PH">
                                        <div className="headerStatisticsTypeProfesorblueColor_PH"></div>
                                        <p className="TextHeaderFourStatistics_PH">نوع اساتید</p>
                                    </div>
                                    <div className="bodyStatisticsTypeProfesor_PH">
                                    <Doughnut/>
                                    </div>
                                </div>
                                <div className="statisticsGradeLesson_PH">
                                    <div className="headerStatisticsGradeLesson_PH">
                                        <div className="headerStatisticsGradeLessonblueColor_PH"></div>
                                        <p className="TextHeaderFourStatistics_PH">مدرک تحصیلی</p>
                                    </div>
                                    <div className="bodyStatisticsGradeLesson_PH">
                                    <Doughnut/>
                                    </div>
                                </div>

                            </div>
                            <div className="fourStatisticsDown_PH">
                                <div className="statisticsLesson_PH">
                                    <div className="headerStatisticsLesson_PH">
                                        <div className="headerStatisticsLessonblueColor_PH"></div>
                                        <p className="TextHeaderFourStatistics_PH">درس های ارایه شده</p>
                                    </div>
                                    <div className="bodyStatisticsLesson_PH">
                                    <Doughnut/>
                                    </div>
                                </div>
                                <div className="statisticsSex_PH">
                                    <div className="headerStatisticsSex_PH">
                                        <div className="headerStatisticsSexblueColor_PH"></div>
                                        <p className="TextHeaderFourStatistics_PH"> جنسیت</p>
                                    </div>
                                    <div className="bodyStatisticsSex_PH">
                                    <Doughnut/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="leftDown_PH">
                        <div className="listLesson_PH">
                            <div className="headerListLesson_PH">
                                <div className="headerListLessonblueColor_PH"></div>
                                <p className="TextHeader_PH">دروس</p>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }

}
export default Home;