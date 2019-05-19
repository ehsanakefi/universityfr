
import {
    Add_DataID,

} from "../actions/types";

const defaultState = {
    idLable:[]
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case Add_DataID:
            return {
                idLable:[...state.idLable,action.payload]
            };
      
        default:
            return state;

    };
}