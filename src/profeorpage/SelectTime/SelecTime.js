import React from 'react';

import '../../css/SelectTime.css';

class SelectTime extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            start:{
                   bhour:9,bmin:15,
                   hour: 10,min:30,
                   fhour:11,fmin:45
                },

            finish:{
                    bhour:10,bmin:0,
                    hour: 11,min:15,
                    fhour:12,fmin:30    
                }
          }
        this.selecttime=this.selecttime.bind(this);


        this.plushourStart=this.plushourStart.bind(this);
        this.mineshourStart=this.mineshourStart.bind(this);
        this.plusminStart=this.plusminStart.bind(this);
        this.minesminStart=this.minesminStart.bind(this);

        this.plushourFinish=this.plushourFinish.bind(this);
        this.mineshourFinish=this.mineshourFinish.bind(this);
        this.plusminFinish=this.plusminFinish.bind(this);
        this.minesminFinish=this.minesminFinish.bind(this);

    }
    selecttime(e){
        
      e.target.style.background="#4be76d";
    }
    plushourFinish(){
        if( this.state.finish.hour==22)
        {
            this.state.finish.bhour=22;
        this.state.finish.hour=6;
        this.state.finish.fhour=7;
        }
        else if( this.state.finish.hour==21)
        {
            this.state.finish.bhour=21;
        this.state.finish.hour=22;
        this.state.finish.fhour=6;
        }
        else if( this.state.finish.hour==6)
        {
            this.state.finish.bhour=6;
        this.state.finish.hour=7;
        this.state.finish.fhour=8;
        }else {
            
        this.state.finish.bhour++;
        this.state.finish.hour++;
        this.state.finish.fhour++;
        }
        this.setState({
            finish:{
                ...this.state.finish,
                bhour:  this.state.finish.bhour,
                hour: this.state.finish.hour,
                fhour: this.state.finish.fhour
             }
        })
    }
    mineshourFinish(){
        if( this.state.finish.hour==7)
        {
            this.state.finish.bhour=22;
        this.state.finish.hour=6;
        this.state.finish.fhour=7;
        }
        else if( this.state.finish.hour==6)
        {
            this.state.finish.bhour=21;
        this.state.finish.hour=22;
        this.state.finish.fhour=6;
        } 
         else if( this.state.finish.hour==22)
        {
            this.state.finish.bhour=20;
        this.state.finish.hour=21;
        this.state.finish.fhour=22;
        }
        else {
           
            this.state.finish.bhour--;
            this.state.finish.hour--;
            this.state.finish.fhour--;
        }
     
        this.setState({
            finish:{
                ...this.state.finish,
                bhour:  this.state.finish.bhour,
                hour: this.state.finish.hour,
                fhour: this.state.finish.fhour
             }
          
        })
    }
    plusminFinish(){
        if( this.state.finish.min==0){
            this.state.finish.bmin=0;
            this.state.finish.min=15;
            this.state.finish.fmin=30;
        }else if(this.state.finish.min==15){
            this.state.finish.bmin=15;
            this.state.finish.min=30;
            this.state.finish.fmin=45;
        }
        else if(this.state.finish.min==30){
            this.state.finish.bmin=30;
            this.state.finish.min=45;
            this.state.finish.fmin=0;
        }else if(this.state.finish.min==45){
            this.state.finish.bmin=45;
            this.state.finish.min=0;
            this.state.finish.fmin=15;
        }


        this.setState({
            finish:{
                ...this.state.finish,
                bmin:  this.state.finish.bmin,
                min: this.state.finish.min,
                fmin: this.state.finish.fmin
             }
        })
    }
    minesminFinish(){
        if( this.state.finish.min==0){
            this.state.finish.bmin=30;
            this.state.finish.min=45;
            this.state.finish.fmin=0;
        }else if(this.state.finish.min==15){
            this.state.finish.bmin=45;
            this.state.finish.min=0;
            this.state.finish.fmin=15;
        }
        else if(this.state.finish.min==30){
            this.state.finish.bmin=0;
            this.state.finish.min=15;
            this.state.finish.fmin=30;
        }else if(this.state.finish.min==45){
            this.state.finish.bmin=15;
            this.state.finish.min=30;
            this.state.finish.fmin=45;
        }
        this.setState({
            finish:{
                ...this.state.finish,
                bmin:  this.state.finish.bmin,
                min: this.state.finish.min,
                fmin: this.state.finish.fmin
             }
        })
    }


    mineshourStart(){
        if( this.state.start.hour==7)
        {
            this.state.start.bhour=22;
        this.state.start.hour=6;
        this.state.start.fhour=7;
        }
        else if( this.state.start.hour==6)
        {
            this.state.start.bhour=21;
        this.state.start.hour=22;
        this.state.start.fhour=6;
        } 
         else if( this.state.start.hour==22)
        {
            this.state.start.bhour=20;
        this.state.start.hour=21;
        this.state.start.fhour=22;
        }
        else {
           
        this.state.start.bhour--;
        this.state.start.hour--;
        this.state.start.fhour--;
        }
        this.setState({
            start:{
                ...this.state.start,
                bhour:  this.state.start.bhour,
                hour: this.state.start.hour,
                fhour: this.state.start.fhour
             }
          
        })
    }
    minesminStart(){
        if( this.state.start.min==0){
            this.state.start.bmin=30;
            this.state.start.min=45;
            this.state.start.fmin=0;
        }else if(this.state.start.min==15){
            this.state.start.bmin=45;
            this.state.start.min=0;
            this.state.start.fmin=15;
        }
        else if(this.state.start.min==30){
            this.state.start.bmin=0;
            this.state.start.min=15;
            this.state.start.fmin=30;
        }else if(this.state.start.min==45){
            this.state.start.bmin=15;
            this.state.start.min=30;
            this.state.start.fmin=45;
        }
        this.setState({
            start:{
                ...this.state.start,
                bmin:  this.state.start.bmin,
                min: this.state.start.min,
                fmin: this.state.start.fmin
             }
        })
    }
    plusminStart(){
        if( this.state.start.min==0){
            this.state.start.bmin=0;
            this.state.start.min=15;
            this.state.start.fmin=30;
        }else if(this.state.start.min==15){
            this.state.start.bmin=15;
            this.state.start.min=30;
            this.state.start.fmin=45;
        }
        else if(this.state.start.min==30){
            this.state.start.bmin=30;
            this.state.start.min=45;
            this.state.start.fmin=0;
        }else if(this.state.start.min==45){
            this.state.start.bmin=45;
            this.state.start.min=0;
            this.state.start.fmin=15;
        }
        this.setState({
            start:{
                ...this.state.start,
                bmin:  this.state.start.bmin,
                min: this.state.start.min,
                fmin: this.state.start.fmin
             }
        })
    }
    plushourStart(){
        if( this.state.start.hour==22)
        {
            this.state.start.bhour=22;
        this.state.start.hour=6;
        this.state.start.fhour=7;
        }
        else if( this.state.start.hour==21)
        {
            this.state.start.bhour=21;
        this.state.start.hour=22;
        this.state.start.fhour=6;
        }
        else if( this.state.start.hour==6)
        {
            this.state.start.bhour=6;
        this.state.start.hour=7;
        this.state.start.fhour=8;
        }else {
            this.state.start.bhour++;
            this.state.start.hour++;
            this.state.start.fhour++;
        }
        this.setState({
            start:{
                ...this.state.start,
                bhour:  this.state.start.bhour,
                hour: this.state.start.hour,
                fhour: this.state.start.fhour
             }
        })
    }

    render(){
        return(
                <div className="selecttimeboxmain1">
                   <div className="selecttimebox1">
                     <div className="leftselecttime">
                        <div className="boxtime">
                            <div className="boxtimeleft">
                            <div className="boxtimeleft_up" onClick={this.mineshourStart}>{this.state.start.bhour==0?"00":this.state.start.bhour}</div>
                            <div className="boxtimeleft_center">{this.state.start.hour==0?"00":this.state.start.hour}</div>    
                            <div onClick={this.plushourStart} className="boxtimeleft_down">{this.state.start.fhour==0?"00":this.state.start.fhour}</div>    

                            </div>
                            <div className="boxtimecenter">:</div>
                            <div className="boxtimeright">
                            <div className="boxtimeright_up" onClick={this.minesminStart}>{this.state.start.bmin==0?"00":this.state.start.bmin}</div>
                            <div className="boxtimeright_center">{this.state.start.min==0?"00":this.state.start.min}</div>    
                            <div className="boxtimeright_down" onClick={this.plusminStart}>{this.state.start.fmin==0?"00":this.state.start.fmin}</div>  
                            </div>
                        </div>
                     </div>
                   <div className="rightselecttime">
                   <div className="boxtime">
                   <div className="boxtimeleft">
                            <div className="boxtimeleft_up" onClick={this.mineshourFinish}>{this.state.finish.bhour==0?"00":this.state.finish.bhour}</div>
                            <div className="boxtimeleft_center">{this.state.finish.hour==0?"00":this.state.finish.hour}</div>    
                            <div onClick={this.plushourFinish} className="boxtimeleft_down">{this.state.finish.fhour==0?"00":this.state.finish.fhour}</div>    

                            </div>
                            <div className="boxtimecenter">:</div>
                            <div className="boxtimeright">
                            <div className="boxtimeright_up" onClick={this.minesminFinish}>{this.state.finish.bmin==0?"00":this.state.finish.bmin}</div>
                            <div className="boxtimeright_center">{this.state.finish.min==0?"00":this.state.finish.min}</div>    
                            <div className="boxtimeright_down" onClick={this.plusminFinish}>{this.state.finish.fmin==0?"00":this.state.finish.fmin}</div>  
                            </div>
                   
                   </div>                   
                   </div>

                   </div>
                </div>
        );
    }
}
export default SelectTime;