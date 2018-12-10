import React from 'react';

import '../../css/addgroup.css';
import Brand from "../../image/brand.png";
import right from '../../image/r.png';
import left from '../../image/l.png'
import Lessondraganddrop from '../Lessons/Lessondragandrop'


const fakedata=["پایگاه داده","مهندسی اینترنت","ریاضی"];
class AddGroup extends React.Component{
    constructor(props){
        super(props)
        this.state={
            counter:0,
            term:[]
        }
        this.onclickplus=this.onclickplus.bind(this);
        this.onclickminez=this.onclickminez.bind(this);

    }
onclickplus(){
this.setState({counter:this.state.counter+1
,
term:[...this.state.term,this.state.counter]
})


}
onclickminez(){
   console.log(this.state.term)
  let term = this.state.term
  term.pop()
    this.setState({counter:this.state.counter-1,
        term
    
    })
    setTimeout(() => {
        console.log(this.state.term) 
    }, 200);
    }
    render(){
        return(
            <div className="addgroup">
                 <div className="group">  
                    <div className="header">
                        <div className="direct">
                         <p>صفحه اصلی  >  اضافه کردن گروه</p>
                         </div>
                        <div className="brand">  <img src={Brand} alt="notFind:)"></img></div>
                         
                        </div>
                        <div className="counter">
                            <div className="boxcounter">
                                <div onClick={this.onclickplus} className="q"><span><img  className="imgleft" src={left} alt="notfound"/></span></div>
                                <div className="w">{this.state.counter}</div>
                                <div onClick={this.onclickminez}  className="e"><span><img className="imgright" src={right} alt="notfound"/></span></div>
                            </div>
                        </div>
                        <div className="boxgroups">
                            
                        <div className="centerboxgroups">
                            <Lessondraganddrop fakedata={fakedata}/>
                            <div className="numberofgroup">
                                <div className="boxnumberofgroup">{this.state.counter}</div>
                            </div>
                        </div>
                            
                        </div>
                        </div>
            
            </div>
        );
    }
}
export default AddGroup;