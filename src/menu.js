import React from 'react';
import './css/menu.css'

import Homeimge from './image/home.png';
import Setting from './image/setting.png';
import Profesor from './image/profesor.png';
import Table from './image/table.png';

export default class ToolBar extends React.Component{
    
    render(){
        return(
            <div className="tool_PH">
            <img className="icon" alt="Not found" src={Homeimge} />
            <img className="icon" alt="Not found" src={Setting} />
            <img className="icon" alt="Not found" src={Profesor} />
            <img className="icon" alt="Not found" src={Table} />
        </div>
                );
    }
}