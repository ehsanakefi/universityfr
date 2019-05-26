import React from "react";
import "./css/firstpage.css";
class firstpage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Home">
        <div className="bg_HM" />
        <div className="center_HM">
          <headers className="centerHeader_HM">
            <ul className="headerList_HM">
              <li>ورورد</li>
              <li>ثبت نام</li>
              <li>درباره ی ما </li>
            </ul>
          </headers>
          <div className="centerBody_HM">
            <div className="centerBodyLeft_HM">
              {/* <div className="centerBodyLeftText_HM">
                      <h4 className="centerBodyLeftTextHeader_HM">مدیریت زمان</h4>
                      <p className="centerBodyLeftTextbody_HM">
                      ما در این وبسایت با بهره گیری از الگوریتم های بهینه و سریع در جهت برنامه ریزی سریع کلاس های دانشگاه و مدارس تلاش کردیم که کاربر با سرعت بتواند برنامه های زمانی خود را با سرعت و دقت انجام دهد
                      </p>
                      </div> */}
            </div>
            <div className="centerBodyRight_HM">
              <div className="centerBodyLeftText_HM">
               
                <h1 className="centerBodyLeftTextHeader_HM">زمان را در دست بگیرید</h1>
                <p className="centerBodyLeftTextbody_HM">تنظیم و برنامه ریزی ساعات کلاس خود را به ما بسپارید ما در این وبسایت در تلاشیم که با دقت و سرعت بتوانیم بهترین برنامه ی ریزی کلاس های شما را انجام دهیم</p>
                <div className="centerBodyLeftTextButton_HM"><button className="BTNMoreView">اطلاعات بیشتر</button></div>
              </div>
              {/*  */}
              {/*     <ul className="centerBodyRightList_HM">
                            <li className="centerBodyRightListItem_HM"><h2>دقت</h2></li>
                            <li className="centerBodyRightListItem1_HM"><h3>سرعت</h3></li>
                            <li className="centerBodyRightListItem2_HM"><h4>امنیت</h4></li>
                        </ul> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default firstpage;
