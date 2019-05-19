import React from 'react'
import Draggable from './Draggable'
import Droppable from './Droppable'
import styled from 'styled-components'

const Wrapper = styled.div`
width :100%;
padding:32px;
display:flex;
justify-content:center;
`;
const Item = styled.div`
border-radius:3px;
color:#555;
padding:8px;


background-color: #222;
`;
const droppableStyle={
    backgroundColor:'#555',
    width:'250px',
    height:'400px',
    margin:'32px'
}
const droppableStylee={
    backgroundColor:'#000',
    width:'250px',
    height:'400px',
    margin:'32px'
}
export default class Test extends React.Component {

constructor(props){
    super(props)
    this.state={
        id:["item1","item2"]
    }
}
    render() {
        return (
            <Wrapper>
                <Droppable id="dr1" stylee={droppableStylee} style={droppableStyle}>
                {this.state.id.map((id)=><Draggable id={id} key={id} style={{ margin: '8px' }}><Item>Ehsan{id}</Item></Draggable>)}
                    {/* <Draggable id="item1" style={{ margin: '8px' }}><Item>Ehsan</Item></Draggable>
                    <Draggable id="item2" style={{ margin: '8px' }}><Item>Ehsan2</Item></Draggable> */}
                </Droppable>

                <Droppable id="dr2" stylee={droppableStylee} style={droppableStyle}>

                </Droppable>

                <Droppable id="dr3" stylee={droppableStylee} style={droppableStyle}>

                </Droppable>

            </Wrapper>

        )
    }
}