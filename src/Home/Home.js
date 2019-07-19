import React from 'react';
import '../css/home.css';

import ColumnChart from '../Statistics/ColumnChart'
import { Doughnut, Pie } from 'react-chartjs-2';
import ToolBar from '../ToolBar';
import NoPerson from '../image/bigperson.png';
import Menu from '../menu';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataStatus: {
                labels: [
                    'Red',
                    'Green',
                    'Yellow'
                ],
                datasets: [{
                    data: [300, 50, 100],
                    backgroundColor: [
                        '#ff0000',
                        '#ffff00',
                        '#3333ff'
                    ],
                    borderWidth: 0,

                    hoverBackgroundColor: [
                        '#cc0000',
                        '#b3b300',
                        '#000080'
                    ]
                }]
            },
            dataNumberProWeek: {
                labels: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'],
                datasets: [
                    {
                        label: 'My First dataset',
                        backgroundColor: 'rgba(181,230,29,1)',
                        borderColor: 'rgba(51, 102, 0,1)',
                        borderWidth: 1,

                        hoverBackgroundColor: 'rgba(181,230,29,0.8)',
                        hoverBorderColor: 'rgba(51, 102, 0,1)',
                        data: [65, 59, 80, 81, 56, 55, 40]
                    }
                ]
            },
            dataTypeProfesor: {
                labels: [
                    "  مدعو",
                    "  هیات علمی",
                ],
                datasets: [{
                    data: [50, 150],
                    backgroundColor: [
                        "#66ff33",
                        "#3333ff",

                    ],
                    borderWidth: 0,
                    hoverBackgroundColor: [
                        "#208000",
                        "#000080",

                    ]
                }]
            },
            dataDegree: {
                labels: [
                    "دکترا",
                    "فوق لیسانس",
                ],
                datasets: [{
                    data: [140, 60],
                    backgroundColor: [
                        "#66ff33",
                        "#3333ff",

                    ],
                    borderWidth: 0,
                    hoverBackgroundColor: [
                        "#208000",
                        "#000080",

                    ]
                }]
            },
            datasex: {
                labels: [
                    "          مرد",
                    "           زن",
                ],
                datasets: [{
                    data: [80, 120],
                    backgroundColor: [
                        "#66ff33",
                        "#3333ff",

                    ],
                    borderWidth: 0,
                    hoverBackgroundColor: [
                        "#208000",
                        "#000080",

                    ]
                }]
            },
            dataPrsentLesson: {
                labels: [
                    "درس اریه شده",
                    "درس اریه نشده",
                ],
                datasets: [{
                    data: [90, 110],
                    backgroundColor: [
                        "#66ff33",
                        "#3333ff",

                    ],
                    borderWidth: 0,
                    hoverBackgroundColor: [
                        "#208000",
                        "#000080",

                    ]
                }]
            }


        }
    }

    render() {
        return (
            <div className="main_PH">
                <div className="right_PH">
                    <div className="informUserProfile_PH">
                        <Menu />
                        <ToolBar />

                    </div>
                    <div className="information_PH">
                        <div className="infoStatistics_PH">
                            <div className="headerStatistics_PH">
                                <div className="headerStatisticsblueColor_PH"></div>
                                <p className="TextHeader_PH">آمار</p>
                            </div>
                            <div className="infoBodyStatistics_PH">
                                <div className="chart-container">
                                    <Pie data={this.state.dataStatus} options={{

                                        maintainAspectRatio: false,
                                        responsive: true,

                                    }} />
                                </div>
                            </div>

                        </div>
                        <div className="infoListProfesor_PH">
                            <div className="headerListProfesor_PH">
                                <div className="headerListProfesorblueColor_PH"></div>
                                <p className="TextHeader_PH">اساتید</p>
                            </div>
                            <div className="infoBodyListProfesor_PH">
                                <div className="boxProfesor_PH">
                                    <div className="boxImageProfesor_PH">
                                        <img className="styleImageProfesor_PH" src={NoPerson} alt="Notfound" />
                                    </div>
                                    <div className="boxNameProfesor_PH">
                                        <p className="fullNameProfesor_PH">رضا ایمانی</p>
                                        <p className="typeProfesor_PH">مدعو</p>
                                    </div>
                                    <div className="boxHistoryProfesor_PH">
                                        <p className="joinUs_PH">ملحق شده</p>
                                        <p className="historyJoinUs_PH">20 اسفند</p>
                                    </div>
                                </div>
                                <div className="boxProfesor_PH">
                                    <div className="boxImageProfesor_PH">
                                        <img className="styleImageProfesor_PH" src={NoPerson} alt="Notfound" />
                                    </div>
                                    <div className="boxNameProfesor_PH">
                                        <p className="fullNameProfesor_PH">رضا ایمانی</p>
                                        <p className="typeProfesor_PH">مدعو</p>
                                    </div>
                                    <div className="boxHistoryProfesor_PH">
                                        <p className="joinUs_PH">ملحق شده</p>
                                        <p className="historyJoinUs_PH">20 اسفند</p>
                                    </div>
                                </div>
                            </div>

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
                                <div className="chart-container">
                                    <ColumnChart data={this.state.dataNumberProWeek} />
                                </div>
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
                                        <div className="chart-container">
                                            <Doughnut data={this.state.dataTypeProfesor} options={{

                                                maintainAspectRatio: false,
                                                responsive: true,
                                                cutoutPercentage: 50,
                                                legend: {
                                                    labels: {
                                                        fontFamily: "myFirstFont1",
                                                        fontSize: 10,
                                                        fontColor: "white",
                                                    }
                                                }
                                            }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="statisticsGradeLesson_PH">
                                    <div className="headerStatisticsGradeLesson_PH">
                                        <div className="headerStatisticsGradeLessonblueColor_PH"></div>
                                        <p className="TextHeaderFourStatistics_PH">مدرک تحصیلی</p>
                                    </div>
                                    <div className="bodyStatisticsGradeLesson_PH">
                                        <div className="chart-container">
                                            <Doughnut data={this.state.dataDegree} options={{

                                                maintainAspectRatio: false,
                                                responsive: true,
                                                cutoutPercentage: 50,
                                                legend: {
                                                    labels: {
                                                        fontFamily: "myFirstFont1",
                                                        fontSize: 10,
                                                        fontColor: "white",
                                                    }
                                                }
                                            }} />
                                        </div>
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
                                        <div className="chart-container">
                                            <Doughnut data={this.state.dataPrsentLesson} options={{

                                                maintainAspectRatio: false,
                                                responsive: true,
                                                cutoutPercentage: 50,
                                                legend: {
                                                    labels: {
                                                        fontFamily: "myFirstFont1",
                                                        fontSize: 10,
                                                        fontColor: "white",
                                                    }
                                                }
                                            }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="statisticsSex_PH">
                                    <div className="headerStatisticsSex_PH">
                                        <div className="headerStatisticsSexblueColor_PH"></div>
                                        <p className="TextHeaderFourStatistics_PH"> جنسیت</p>
                                    </div>
                                    <div className="bodyStatisticsSex_PH">
                                        <div className="chart-container">
                                            <Doughnut data={this.state.datasex} options={{

                                                maintainAspectRatio: false,
                                                responsive: true,
                                                cutoutPercentage: 50,
                                                legend: {
                                                    labels: {
                                                        fontFamily: "myFirstFont1",
                                                        fontSize: 10,
                                                        fontColor: "white",
                                                    }
                                                }
                                            }} />
                                        </div>
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
                            <div className="bodylistLesson_PH">
                                <div className="rowHeaderListLesson_PH">
                                    <p className="rowLesson_PH">درس</p>
                                    <p className="rowNumberProfesor_PH">تعداد استادها</p>
                                    <p className="rowMaximum_PH">بالاترین مدرک</p>
                                    <p className="rowMinimum_PH">پایین ترین مدرک</p>
                                    <p className="rowAcademicStaff_PH">هیت علمی</p>
                                </div>
                                <div className="rowListLesson_PH">
                                    <p className="rowLesson_PH">مهندسی اینترنت</p>
                                    <p className="rowNumberProfesor_PH">5</p>
                                    <p className="rowMaximum_PH">دکترا</p>
                                    <p className="rowMinimum_PH">فوق لیسانس</p>
                                    <p className="rowAcademicStaff_PH">بله</p>
                                </div><div className="rowListLesson_PH">
                                    <p className="rowLesson_PH">مهندسی اینترنت</p>
                                    <p className="rowNumberProfesor_PH">5</p>
                                    <p className="rowMaximum_PH">دکترا</p>
                                    <p className="rowMinimum_PH">فوق لیسانس</p>
                                    <p className="rowAcademicStaff_PH">بله</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }

}
export default Home;