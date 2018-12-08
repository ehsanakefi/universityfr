import React from 'react';
import '../../css/detail.css';
import Noimage from '../../image/noimage.jpg';



class detail2 extends React.Component{
constructor(props){
    super(props);
}
render(){
    return(
        <div className="detail_person">
        <div className="imgpersondetail">
            <img src={Noimage} alt="Notfind" />
        </div>                        
        <div className="profile_detail">
            <h2></h2>
            <div>
                <span className="titledetail">درس های ارايه شده</span>
            
                <ul className="list_lesson">
                <div className="point"></div>
                    <li>مبانی کامپیوتر</li>
                    <li>ریزپردازنده</li>
                    <li>الکترونیک</li>
                </ul>
            </div>
            <div>
                <span className="titledetail">زمان های ارايه شده</span>
                
                <ul className="list_lesson">
                <div className="point"></div>
                    <li>شنبه: 8-10</li>
                    <li>یکشنبه: 8-12</li>
                    <li>سه شنبه: 14-18</li>
                </ul>
            </div>

        </div>
        </div>
    );
}
}

export default detail2;