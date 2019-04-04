import {
  ADD_PERSON_LOADER,
  ADD_PERSON,
  ADD_PERSON_ERR,
  GET_PERSONS_LOADER,
  GET_PERSONS,
  GET_PERSONS_ERR
} from "../actions/types";

const defaultState = {
  persons: [],
  currentPerson: {},
  error:'',
  loader: { getPersonsLoader: false, addPersonLoader: false }
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PERSON_LOADER:
      return {
        ...state,
        addPersonLoader: true
      };
    case ADD_PERSON:
      return {
        ...state,
        persons: [...state.persons, action.payload],
        addPersonLoader: false
      };
      case ADD_PERSON_ERR:
      return{
        ...state,
        error:'we have not add person'
      }
    case GET_PERSONS_LOADER:
      return { ...state, getPersonsLoader: true };
    case GET_PERSONS:
      return { ...state, persons: [...state.persons,action.payload], getPersonsLoader: false };
      case GET_PERSONS_ERR:
      return{
        ...state,
        error:'we have not get persons'
      }
    case "SET_CURRENT_PROFESOR":
      return { ...state, currentPerson: action.payload };
    default:
      return state;
  }
};
