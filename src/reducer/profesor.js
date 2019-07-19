import {
  ADD_PROFESOR_LOADER,
  ADD_PROFESOR,
  ADD_PROFESOR_ERR,
  GET_PERSONS_LOADER,
  GET_PERSONS,
  GET_PERSONS_ERR
} from "../actions/types";

const defaultState = {
  persons: [],
  currentPerson: {},
  error: '',
  loader: { getPersonsLoader: false, addPersonLoader: false }
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PROFESOR_LOADER:
      return {
        ...state,
        loader: { addPersonLoader: true, getPersonsLoader: false }
      };
    case ADD_PROFESOR:
      return {
        ...state,
        persons: [...state.persons, action.payload],
        loader: { addPersonLoader: false, getPersonsLoader: false }
      };
    case ADD_PROFESOR_ERR:
      return {
        ...state,
        error: 'we have not add person'
      }
    case GET_PERSONS_LOADER:
      return { ...state, loader: { getPersonsLoader: true, ...state.loader } };
    case GET_PERSONS:
      return { ...state, persons: action.payload, loader: { addPersonLoader: false, getPersonsLoader: false } };
    case GET_PERSONS_ERR:
      return {
        ...state,
        loader: { getPersonsLoader: false, ...state.loader },
        error: 'we have not get persons'
      }
    case "SET_CURRENT_PROFESOR":
      return { ...state, currentPerson: action.payload };
    default:
      return state;
  }
};
