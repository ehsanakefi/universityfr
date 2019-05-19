import React from 'react'
import { connect } from "react-redux";

import styled from 'styled-components';

const TaskList = styled.div`

width:'250px',
height:'400px',
margin:'32px'
  background-color: ${props =>
    props.isDraggingOver ? '#000' : '#fff'}
  
`
class Droppable extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            id:true
        }
    }
   drag=()=>{
     this.setState({
         id:false
     })
   }
    drop=(e)=>{
        e.preventDefault();
      
      
         const data=e.dataTransfer.getData('transfer');
        
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
    allowDrop=(e)=>{
        e.preventDefault();
     //   console.log(e.target.id)
    }
  
    
    render(){
        return(
            <div  style={this.state.id?this.props.style:this.props.style} id={this.props.id}  onDragStart={this.drag} onDrop={this.drop} onDragOver={this.allowDrop} >
                {this.props.children}
            </div>
        )
    }
}

const msp = ({ DataId }) => ({ DataId });
export default connect(
  msp,
  { }
)(Droppable);