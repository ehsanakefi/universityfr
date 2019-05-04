import {ADD_LESSON_TABLE} from './types';
import { dispatch } from 'rxjs/internal/observable/range';

export const ADDLessonTable =d=>{
    
    return dispatch=> dispatch({
       type: ADD_LESSON_TABLE,
       payload:d
    })
}

