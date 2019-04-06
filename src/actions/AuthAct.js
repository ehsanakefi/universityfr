
import axios from 'axios';
import { API, GET_AUTH_CODE, GET_AUTH_CODE_LOAD, GET_AUTH_CODE_ERR, GET_AUTH_TOKEN, GET_AUTH_TOKEN_LOAD, GET_AUTH_TOKEN_ERR, UNAUTH_USER,  authenticate, signout } from './types'
import { dispatch } from 'rxjs/internal/observable/range';

// export const getCode = (d) => {

//   return (dispatch) => {
//     dispatch({type: GET_AUTH_CODE_LOAD })
//     return axios.post(`${API}login/withmob`, d)
//     .then(resp => {
//         console.log(resp.data.code);
      
//         const authDate = new Date();
//         localStorage.setItem('user', JSON.stringify(resp.data.user));
//         localStorage.setItem('authTime', JSON.stringify(authDate));
//         return dispatch({type: GET_AUTH_CODE, payload: resp.data.user})
//     })
//     .catch(err => dispatch({ type: GET_AUTH_CODE_ERR}))

//   }
// };


export const getToken = (d) => {
  return (dispatch) => {
    dispatch({type: GET_AUTH_TOKEN_LOAD })
    return axios.post(`${API}login`, d)
    .then(resp => {
      console.log(resp.data.user)
        localStorage.setItem('user', JSON.stringify(resp.data.user));
        localStorage.setItem('token', resp.data.token)
        return dispatch({type: GET_AUTH_TOKEN, payload: resp.data.user})
    })
    .catch(err => {
      console.log(JSON.stringify(err, null, 2));
      
      return dispatch({ type: GET_AUTH_TOKEN_ERR})
    })

  }
};

export const unAuth = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('authTime')
  localStorage.removeItem('token')
  return { type: UNAUTH_USER } 
}


