import {
    ADD_LESSON_TABLE,
    ADD_COLUMNS_TABLE,
    ADD_columnsOrder_TABLE,
    LESSON_TABLE,
    COLUMNS_TABLE,
    columnsOrder_TABLE
} from "./types";
import { dispatch } from 'rxjs/internal/observable/range';

export const ADDLessonTable =d=>{
    
    return dispatch=> dispatch({
       type: ADD_LESSON_TABLE,
       payload:d
    })
}

export const ADDColumnsTable=d=>{
    return dispatch=>dispatch({
        type:ADD_COLUMNS_TABLE,
        payload:d
    })
}
export const ADDColumnsOrderTable=d=>{
    return dispatch=>dispatch({type:ADD_columnsOrder_TABLE,
    payload:d
    })
}
export const  LessonTable =d=>{
    
    return dispatch=> dispatch({
       type:  LESSON_TABLE,
       payload:d
    })
}

export const  ColumnsTable=d=>{
    return dispatch=>dispatch({
        type: COLUMNS_TABLE,
        payload:d
    })
}
export const  ColumnsOrderTable=d=>{
    return dispatch=>dispatch({type: columnsOrder_TABLE,
    payload:d
    })
}