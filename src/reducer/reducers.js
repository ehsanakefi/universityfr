// import { combineReducers } from 'redux'
// import person from './person';

// const reducer = ()=>combineReducers({ person});

// ​export default reducer;
import {combineReducers} from 'redux';
import persons from './person';
import authrouter from './authRouter';
import initionalData from './initionalData'
import auth from './auth_reducer';
const reducer = combineReducers({persons, auth,authrouter,initionalData});
export default reducer;