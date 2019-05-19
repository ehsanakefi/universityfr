
import {Add_DataID} from './types'
import { dispatch } from 'rxjs/internal/observable/range';

export const AddIDDrag = (d) => {

  return (dispatch) => 
   
 dispatch({type: Add_DataID ,payload:d})

  
};

