// import React from 'react';
// import styled from 'styled-components';
// import '../../css/profesorInformation.css';
// import noimage from "../../image/noimage.jpg";


// const ListOneOFProfesor_PI = styled.div`
// margin: 0px 5px 5px 4px;
// padding: 0px 5px 0px 4px;
// border: #999cab solid 1px;
// display: flex;
// border-radius: 5px;
// flex-direction: column;
// height: 50px;
// `;
// const ListOneOFProfesorNameLesson_PI=styled.div`
// flex: 1;
// `;
// const ListOneOFProfesorProfile_PI=styled.div`
// flex: 2;
// display: flex;
// align-items: center;
// direction: ltr;
// `;

// class  ProfesorInformation extends React.Component{

   
   
//     render(){
//         return(
//             <ListOneOFProfesor_PI>
//             <ListOneOFProfesorNameLesson_PI>
//             {this.props.Lesson.name_Lesson}
//             </ListOneOFProfesorNameLesson_PI>
//             <ListOneOFProfesorProfile_PI>
//            <img src={noimage} className="imglistOneOFProfesor_PI" alt="NotFound"/>
//              <p className="listOneOFProfesorNameProfesor_PI"> {this.props.Lesson.nameAndFamily_Profesor} 
//              </p>
                     
//             </ListOneOFProfesorProfile_PI>
//             </ListOneOFProfesor_PI>
//         )
//     }
// }
// export default ProfesorInformation;
import React from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props =>
    props.isDragDisabled
      ? 'lightgrey'
      : props.isDragging
        ? 'lightgreen'
        : 'white'};
`

export default class Task extends React.Component {
  render() {
    const isDragDisabled = this.props.task.id === 'task-1'
    return (
      <Draggable
        draggableId={this.props.task.id}
        index={this.props.index}
        isDragDisabled={isDragDisabled}
      >
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            innerRef={provided.innerRef}
            isDragging={snapshot.isDragging}
            isDragDisabled={isDragDisabled}
          >
            {this.props.task.name_Lesson}
          </Container>
        )}
      </Draggable>
    )
  }
}
