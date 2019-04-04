import axios from 'axios';
import {ADD_PERSON_LOADER,ADD_PERSON,ADD_PERSON_ERR,GET_PERSONS_LOADER,GET_PERSONS,GET_PERSONS_ERR } from './types'
export const addperson = (d) => {
  return (dispatch) => {
    dispatch({type: ADD_PERSON_LOADER })
  
    return axios.post('http://localhost:5413/addProfesor', d)
    .then(resp => dispatch({type: ADD_PERSON, payload:resp.data.newProfesor}))
    .catch(err => dispatch({ type: ADD_PERSON_ERR, payload: err.respnse.data}))

  }
};

export const getPerson=()=>{
  return (dispatch)=>{
    dispatch({type:GET_PERSONS_LOADER})
    axios.get('http://localhost:5413/Profesor')
    .then(res=>dispatch({
      type:GET_PERSONS,
      payload:res.data.Profesors
    }))
    .catch(err=>dispatch({type:GET_PERSONS_ERR}))
  }
}
export const setCurrentProfesor = (d) => ({ type: 'SET_CURRENT_PROFESOR', payload:d });


