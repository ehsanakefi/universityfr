import "../../css/profesor.css";
import React from "react";
import Noimage from '../../image/noimage.jpg';
import { connect } from 'react-redux'
import {setCurrentProfesor} from '../../actions/ProfesorAct'

class profesor extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="profesorsadd_profesor_box">
            <div className="profesorsadd_profesor_box_img"><img className="profesorsadd_profesor_box_img_profile" src={Noimage}/></div>
            <div className="profesorsadd_profesor_box_Specifications">
                <div className="profesorsadd_profesor_box_Specifications_name">{this.props.person.firstname}</div>
                <div className="profesorsadd_profesor_box_Specifications_phone">{this.props.person.telphone}</div>
            </div>                            
        </div>
            // <div onClick={() => this.props.setCurrentProfesor(this.props.person)} className="addprofesorbox">
            //     <div className="prfesorname_detail"> 
                    
            //         <div className="detail_tel_emi" > 
            //         <p className="detail_name">{this.props.person.firstname} {this.props.person.lastname}</p>
            //             <p>ایمیل:{this.props.person.email}</p>
            //             <p>تلفن همراه:{this.props.person.telphone}</p>
            //             <div ><a className="detaillink" href="#">جزییات</a></div>
            //         </div>
            //     </div>
            //     <div className="profesorProfile">
            //         <img src={Noimage} alt="NotFind:)" />
            //     </div>
            // </div>
        )}
}

export default connect(null, {setCurrentProfesor})(profesor);