import {
    ADD_LESSON_TABLE,
    ADD_COLUMNS_TABLE,
    ADD_columnsOrder_TABLE
} from "../actions/types";

const defaultState = {
    number:0,
    Lesson:[
        
    ]
    ,
    columns:{
        
    }
    ,
    columnsOrder: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case ADD_LESSON_TABLE:
            return {
                ...state,
               Lesson:[...state.Lesson,action.payload],
                number:state.number+1
            };
        case ADD_COLUMNS_TABLE:
        return {
            ...state,
            columns:[...state.columns,action.payload]
        };
        case ADD_columnsOrder_TABLE:
        return {
            ...state,
            columnsOrder:[...state.columnsOrder,action.payload]
        };
        default:
        return state;

    };
}