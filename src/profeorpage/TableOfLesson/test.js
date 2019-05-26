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
const Ehsan = styled.div`
background-color: ${props =>
        props.ali ? '#555' : '#000'}
    width:250px;
    height:400px;
    margin:32px;
`
const droppableStylee = {
    backgroundColor: '#000',
    width: '250px',
    height: '400px',
    margin: '32px'
}
export default class Test extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: ["a", "b"],
            id1: [false,false]
        }
    }
    drop = (e) => {
        e.preventDefault();


        const data = e.dataTransfer.getData('transfer');

        //  this.props.DataId.idLable.map((id)=>{
        //     let ind=e.target.id.split(" ")[1];
        //     let inde=e.target.id.split(" ")[0];

        //      if(id.name==data.split(" ")[0]){

        //          if(id.sha.includes(ind)){
        //              if(inde==1){
        //                 e.target.appendChild(document.getElementById(data));

        //              }
        //          }
        //      }
        //  })
        //  console.log(this.props.DataId.idLable.name+"ol"+data.split(" ")[0])
        // console.log(this.props.DataId)
        e.target.appendChild(document.getElementById(data));
        console.log(data)

    }
    allowDrop = (e) => {
        e.preventDefault();
        //   console.log(e.target.id)
    }
    drag = (e) => {

        
        // console.log(this.state.id1[0]);
         if(e.target.id=='a'){
             console.log("AAA")
            this.setState({
                ...this.state,
                id1:[true,false]
            })
         }else if(e.target.id=='b'){
            this.setState({
                ...this.state,
                id1:[false,true]
            })
         }
         
        e.dataTransfer.setData('transfer', e.target.id);

    }

    noAllowDrop = (e) => {
        e.stopPropagation();

    }

    render() {
        return (
            <Wrapper>
                <Ehsan ali={this.state.id1} id="dr1" onDragStart={this.drag} onDrop={this.drop} onDragOver={this.allowDrop} >


                    {this.state.id.map((id) => <div id={id} draggable="true" onDragStart={this.drag} style={{ margin: '8px' }} onDragOver={this.noAllowDrop} >
                        <Item>Ehsan{id}</Item></div>)}

                </Ehsan>
                <Ehsan ali={this.state.id1[0]} id="dr1" onDragStart={this.drag} onDrop={this.drop} onDragOver={this.allowDrop} >
{console.log(this.state.id1[0])}



                </Ehsan>

                <Ehsan ali={this.state.id1[1]} id="dr1" onDragStart={this.drag} onDrop={this.drop} onDragOver={this.allowDrop} >




                </Ehsan>

                {// <Droppable id="dr1" stylee={droppableStylee} style={droppableStyle}>
                    // {this.state.id.map((id)=><Draggable id={id} key={id} style={{ margin: '8px' }}><Item>Ehsan{id}</Item></Draggable>)}
                    //     {/* <Draggable id="item1" style={{ margin: '8px' }}><Item>Ehsan</Item></Draggable>
                    //     <Draggable id="item2" style={{ margin: '8px' }}><Item>Ehsan2</Item></Draggable> */}
                    // </Droppable>

                    // <Droppable id="dr2" stylee={droppableStylee} style={droppableStyle}>

                    // </Droppable>

                    // <Droppable id="dr3" style={droppableStyle}>

                    // </Droppable>
                }
            </Wrapper>

        )
    }
}