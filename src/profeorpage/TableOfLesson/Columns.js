// import React from 'react';
// import ProfesorInformation from './profesorInformation';
// export default class Columns extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {

//         return (<div>
//             <ul className="listProfesor_TOL">
//                 {this.props.lesson.map((lesson)=>
//                         this.props.column.id_Lesson.includes(lesson.id)?
//                         console.log("yse")
//                         :
//                         null
//                     )}
//             </ul>
//             {this.props.lesson.map((lesson)=>console.log( lesson.id.includes(this.props.column.id_Lesson)))}
//         </div>)
//     }
// }

import React from 'react'
import styled from 'styled-components'
import Task from './profesorInformation'
import { Droppable } from 'react-beautiful-dnd'

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;

  display: flex;
  flex-direction: column;
`
const Title = styled.h3`
  padding: 8px;
`
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props =>
    props.isDraggingOver ? 'skyblue' : 'white'}
  flex-grow: 1;
  min-height: 100px;
`

export default class Columns extends React.Component {
  render() {
    return (
      <Container>
      
      {/* {console.log(this.props.tasks)} */}
        <Droppable droppableId={this.props.column.id} type="TASK">
          {(provided, snapshot) => (
            <TaskList
            ref={provided.innerRef}
              innerRef={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    )
  }
}
