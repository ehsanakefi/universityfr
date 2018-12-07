import { ADD_PERSON } from '../actions/index'

const defaultState = { persons: [], currentPerson: {}, getPersonsLoader: false, addPersonLoader: false }

export default (state = defaultState, action) => {
   
    switch (action.type) {
      case ADD_PERSON:
        return {
          ...state, 
          persons: [ ...state.persons, action.payload ],
           addPersonLoader: false
        }
      case 'SET_CURRENT_PROFESOR':
        return { ...state, currentPerson: action.payload }
        case 'ADD_PERSON_LOADER':
        return{
          ...state, addPersonLoader: true
        }
      case 'GET_PERSONS_LOADER':
        return { ...state, getPersonsLoader: true }
      case 'GET_PERSONS' :
        return { ...state, persons: action.payload, getPersonsLoader: false }
      default:
        return state
    }
  }