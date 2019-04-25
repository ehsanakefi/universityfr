import React from 'react';
import styled from 'styled-components';
import '../../css/profesorInformation.css';
import noimage from "../../image/noimage.jpg";


const ListOneOFProfesor_PI = styled.div`
margin: 0px 5px 5px 4px;
padding: 0px 5px 0px 4px;
border: #999cab solid 1px;
display: flex;
border-radius: 5px;
flex-direction: column;
height: 50px;
`;
const ListOneOFProfesorNameLesson_PI=styled.div`
flex: 1;
`;
const ListOneOFProfesorProfile_PI=styled.div`
flex: 2;
display: flex;
align-items: center;
direction: ltr;
`;

class  ProfesorInformation extends React.Component{

    constructor(props){
        super(props);

    }
   
    render(){
        return(
            <ListOneOFProfesor_PI>
            <ListOneOFProfesorNameLesson_PI>
            {this.props.Lesson}
            </ListOneOFProfesorNameLesson_PI>
            <ListOneOFProfesorProfile_PI>
           <img src={noimage} className="imglistOneOFProfesor_PI" alt="NotFound"/>
             <p className="listOneOFProfesorNameProfesor_PI"> {this.props.Profesor.name} {this.props.Profesor.familyName}</p>
                     
            </ListOneOFProfesorProfile_PI>
            </ListOneOFProfesor_PI>
        )
    }
}
export default ProfesorInformation;