import React from "react";
import "./navigation.css";

import AddPersonIcon from "./img/addperson.png";
import LessonIcon from "./img/open-book.png";
import UniversityIcon from "./img/old-school.png";
import ClassIcon from "./img/teacher-at-the-blackboard.png";
import PersonProfile from "./img/pb.jpg"
import ChartIcon from "./img/three-vertical-outlined-bars-symbol.png";

const nav=()=>(
    <div className="mainnav">
        <ul>
            <li>
                <img className="menuPersonimg" src={PersonProfile} alt="notFind" />
              <div className="namePerson"><span >احسان عاکفی</span></div>  
            </li>
            <li>
                <img src={AddPersonIcon} alt="notFind" />
            </li>
            <li>
                <img src={LessonIcon} alt="notFind" />        
            </li>
            <li>
                <img src={UniversityIcon} alt="notFind" />                
            </li>
            <li>
                <img src={ChartIcon} alt="notFind" />                
            </li>
            <li>
                <img src={ClassIcon} alt="notFind" />                
            </li>
        </ul>

    </div>
);

export default nav;