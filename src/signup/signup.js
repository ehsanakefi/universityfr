import React from 'react';
import '../css/signup.css';
import Imgleft from '../image/techer.png';
class signup extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="main6">
          
            <div className="herdersignup">
            <ul className="listheader">
                <li><a>صفحه اصلی</a></li>
                <li><a>ارتباط با ما</a>     </li>
                <li><a>درباره ی ما</a></li>
            </ul>
            </div> 
            
            <div className="bodysignup"> 
            <div className="boxmain">
            <div className="partright">
            <div><h1 className="headofform">ثبت نام</h1></div>
                <form  className="inputpartright">
                    <div className="inputboxsign"><input placeholder="نام" className="inputsign" type="text"/></div>
                    <div className="inputboxsign"><input placeholder="نام خانوادگی" className="inputsign" type="text"/></div>
                    <div className="inputboxsign"><input placeholder="نام کاربری" className="inputsign" type="text"/></div>
                    <div className="inputboxsign"><input placeholder="پسورد" className="inputsign" type="text"/></div>
                    <div className="inputboxsign"><input placeholder="تکرار پسورد" className="inputsign" type="text"/></div>
                    <div className="inputboxsign"><input placeholder="تلفن همراه" className="inputsign" type="text"/></div>
                    <div className="inputboxsign"><input placeholder="ایمیل" className="inputsign" type="text"/></div>
                    <div className="btnboxsign"><button className="btnsign" type="submit"> ثبت نام</button></div>
                </form>
            
            </div>
            <div className="partleft">
                <img src={Imgleft} alt="NotFound"/>
            </div>
            </div>
            </div></div>
        );
    }
}

export default signup;