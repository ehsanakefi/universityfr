import React from 'react'

export default class Draggable extends React.Component{
    drag=(e)=>{
  
      //  console.log(e.target)
        
        e.dataTransfer.setData('transfer',e.target.id);
        
    }
 
    noAllowDrop=(e)=>{
        e.stopPropagation();
        
    }
    
    render(){
        return(
            <div id={this.props.id} draggable="true"  onDragStart={this.drag} style={this.props.style} onDragOver={this.noAllowDrop} >
                {this.props.children}
            </div>
        )
    }
}