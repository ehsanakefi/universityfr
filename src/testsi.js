import React from "react";
import { connect } from "react-redux"




class signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            familyname: "",
            username: "",
            password: "",
            repitpassword: "",
            telphone: "",
            email: "",
            isfeildrepitpass: false,
            ismatch: false
        };

    }


    render() {
        return (
            <div style={{ minHeight: "100vh", backgroundColor: "blue", display: "flex", flexDirection: "column" }}>
                <div style={{ height: "20%", backgroundColor: "red", width: "100%" }}></div>
                <div style={{ height: "80%", backgroundColor: "green" }}></div>
            </div >
        );
    }
}
export default signup;
