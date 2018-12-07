import axios from 'axios';
export const addperson = (d) => {
  return (dispatch) => {
    dispatch({type: 'ADD_PERSON_LOADER' })
  
    // return axios.post('http://localhost:5413/addProfesor', d)
    // .then(resp => dispatch({type: 'ADD_PERSON', payload:resp.data.newProfesor}))
    // .catch(err => dispatch({ type: 'ADD_PERSON_ERR', payload: err.respnse.data}))

  }
};


export const setCurrentProfesor = (d) => ({ type: 'SET_CURRENT_PROFESOR', payload:d });


