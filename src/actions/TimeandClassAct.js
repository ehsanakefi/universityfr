
import axios from 'axios';
import { ADD_TimeaddClass, ADD_TimeaddClass_LOADER ,ADD_TimeaddClass_ERR} from './types'
import { dispatch } from 'rxjs/internal/observable/range';

export const addTimeandClass = d => {
    return dispatch => {
      dispatch({ type: ADD_TimeaddClass_LOADER });
   
      return axios
        .post("http://localhost:1375/addTimeClass", d)
        .then(resp =>{
          
          return  dispatch({ type: ADD_TimeaddClass, payload: resp.data.Timeclasssave })}
        
        )
        .catch(err =>{
          console.log("is "+err.data)
          return dispatch({ type: ADD_TimeaddClass_ERR, payload: err.respnse })
        });
    };
  };