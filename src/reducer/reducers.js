// import { combineReducers } from 'redux'
// import person from './person';

// const reducer = ()=>combineReducers({ person});

// ​export default reducer;
import { combineReducers } from 'redux';
import profesor from './profesor';
import authrouter from './authRouter';
import initionalData from './initionalData'
import auth from './auth_reducer';
import DataId from './draganddrop'
const reducer = combineReducers({ profesor, auth, authrouter, initionalData, DataId });
export default reducer;