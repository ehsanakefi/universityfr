import {
    ADD_LESSON_TABLE,
    ADD_COLUMNS_TABLE,
    ADD_columnsOrder_TABLE,
    LESSON_TABLE,
    COLUMNS_TABLE,
    columnsOrder_TABLE
} from "../actions/types";

const defaultState = {
    numberOfLesson: 0,
    numberOfColumn: 0,
    Lesson: [

    ]
    ,
    columns: [


    ]
    ,
    columnsOrder: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case ADD_LESSON_TABLE:
            return {
                ...state,
                Lesson: [...state.Lesson, action.payload],
                numberOfLesson: state.numberOfLesson + 1
            };
        case ADD_COLUMNS_TABLE:
            return {
                ...state,
                columns: [...state.columns, action.payload],
                numberOfColumn: state.numberOfColumn + 1,
            };
        case ADD_columnsOrder_TABLE:
            return {
                ...state,
                columnsOrder: action.payload
            };
        case LESSON_TABLE:
            return {
                ...state,
                Lesson: action.payload,

            };
        case COLUMNS_TABLE:
            return {
                ...state,
                columns: action.payload

            };
        case columnsOrder_TABLE:
            return {
                ...state,
                columnsOrder: action.payload
            };
        default:
            return state;

    };
}