import React, { Component } from 'react';
import Addprofile from './profeorpage/addprofesor/addprofesor';
import './App.css';
import Lessondraganddrop from './profeorpage/Lessons/Lessondragandrop'
import Register from './profeorpage/register/register'
import Signup from './signup/signup'
import AddGroup from './profeorpage/group/addgroup';
import Login from './loginpage/login'
import { BrowserRouter ,Switch, Route,Link} from "react-router-dom" ;
import Code from './code/code';
import register from './registerServiceWorker';
import SelectTime from './profeorpage/SelectTime/SelecTime'
const App =()=>{
    return (
    //  <AddGroup/>
     // <SelectTime/>
    
    <BrowserRouter>
   
    
    <Switch>
    <Route exact path='/' component={Addprofile} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/addgroup" component={AddGroup} />
    <Route path="/lessondraganddrop" component={Lessondraganddrop} />
    <Route path="/code" component={Code} />

     </Switch>
   
    </BrowserRouter>
   );
  };
export default App;