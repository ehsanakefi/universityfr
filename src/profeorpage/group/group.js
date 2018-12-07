import React from 'react';

import Navigation from '../nav/navigation';
import './group.css';

class AddGroup extends React.Component{
    constructor(props){
        super(props)
        this.state={
            counter:0
        }
    }

    render(){
        return(
            <div className="maingroup">
                <div></div>
            </div>
        );
    }

}