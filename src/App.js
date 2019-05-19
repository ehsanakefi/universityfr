import React, { Component } from 'react';
import Addprofile from './profeorpage/addprofesor/addprofesor';
import './App.css';
import Lessondraganddrop from './profeorpage/Lessons/Lessondragandrop'
import Register from './profeorpage/register/register'
import Signup from './signup/signup'
import AddGroup from './profeorpage/group/addgroup';
import Login from './loginpage/login';
import SettingUni from './profeorpage/SettingUni'
import TableOfLesson from './profeorpage/TableOfLesson/TableOfLesson';
import TableOfLesson1 from './profeorpage/TableOfLesson/TableOfLesson1';
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
import Home from './Home'


const App =()=>{
    return (
    //  <AddGroup/>
    // <SelectTime/>
    
     <Router>
       <div>
    <Route exact path='/' component={Addprofile} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
    <Route path="/selecttime" component={SelectTime} />
    <Route path="/selecttimetwo" component={SelectTimetwo} />
    <Route path="/signup" component={Signup} />
    <Route path="/tableOfLesson" component={TableOfLesson}/>
    <Route path="/home" component={Home}/>    
    <Route path="/addgroup" component={AddGroup} />
    <Route path="/lessondraganddrop" component={Lessondraganddrop} />
    <Route path="/code" component={Code} />
    <Route path="/settinguni" component={SettingUni} />
      <Route path="/test" component={test}/>
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
  
 function PrivateRoute ({ component: Component, ...rest }){return(
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
    );}


export default App;