import React, { Component } from 'react';
import Addprofile from './profeorpage/addprofesor/addprofesor';
import './App.css';
import Lessondraganddrop from './profeorpage/Lessons/Lessondragandrop'
import Register from './profeorpage/register/register'
import RegisterTwo from './profeorpage/register/registertwo'

import Signup from './signup/signup'
import AddGroup from './profeorpage/group/addgroup';
import Login from './loginpage/login';
import SettingUni from './profeorpage/SettingUni'
import TableOfLesson from './profeorpage/TableOfLesson/TableOfLesson';
import TableOfLesson1 from './profeorpage/TableOfLesson/TableOfLesson1';
import timeTable from './timeTable';
import test from './profeorpage/TableOfLesson/test';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import Code from './code/code';
import register from './registerServiceWorker';
import SelectTimetwo from './profeorpage/SelectTime/Selecttimetwo'
import SelectTime from './profeorpage/SelectTime/SelecTime'
import firtstPage from './firstPage'
import Home from './Home/Home'
import Test from "./testsi"
import ColumnChart from './Statistics/Doughnut'
import NewProfesor from './Profesors/Profesors'
const App = () => {
  return (
    //  <AddGroup/>
    // <SelectTime/>

    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/test1' component={Test} />
        <Route exact path='/columnChart' component={ColumnChart} />
        <Route exact path='/newprofesor' component={NewProfesor} />
        <Route exact path='/tabletime' component={timeTable} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/selecttime" component={SelectTime} />
        <Route path="/selecttimetwo" component={SelectTimetwo} />
        <Route path="/signup" component={Signup} />
        <Route path="/tableOfLesson" component={TableOfLesson1} />
        <Route path="/firtstPage" component={firtstPage} />
        <Route path="/addgroup" component={AddGroup} />
        <Route path="/home" component={Home} />
        <Route path="/lessondraganddrop" component={Lessondraganddrop} />
        <Route path="/code" component={Code} />
        <Route path="/settinguni" component={SettingUni} />
        <Route path="/registertwo" component={RegisterTwo} />
        <Route path="/test" component={test} />
      </div>
    </Router>

  );
};
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
          </button>
      </p>
    ) : (
        <p>You are not logged in.</p>
      )
);

function PrivateRoute({ component: Component, ...rest }) {
  return (
    console.log(this.props)
    // <Route  {...rest}  render={props =>
    //     fakeAuth.isAuthenticated ? (
    //       <Component {...props} />
    //     ) 

    //     : 

    //     (
    //       <Redirect
    //         to={{
    //           pathname: "/login",
    //           state: { from: props.location }
    //         }}
    //       />
    //     )
    //   }
    // />
  );
}


export default App;