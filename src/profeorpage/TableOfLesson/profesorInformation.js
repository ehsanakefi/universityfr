import React from 'react';

class  ProfesorInformation extends React.Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>{this.props.Lesson} </div>
        )
    }
}
export default ProfesorInformation;