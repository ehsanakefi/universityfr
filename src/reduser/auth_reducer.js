import { GET_AUTH_CODE_LOAD, GET_AUTH_CODE_ERR, GET_AUTH_CODE, GET_AUTH_TOKEN_LOAD, GET_AUTH_TOKEN_ERR, GET_AUTH_TOKEN, UNAUTH_USER } from '../actions/types'

const defaultState = { authGetCode: false, user: {}, authenticated: false, error: '', loader: {
    authGetCodeLoader: false, authGetUserLoader: false
} }

export default (state = defaultState, action) => {
   
    switch (action.type) {
        case GET_AUTH_CODE_LOAD:
            return { ...state, loader: { ...state.loader, authGetCodeLoader: true } }
        case GET_AUTH_CODE_ERR:
            return { ...state, loader: { ...state.loader, authGetCodeLoader: false }, error: 'dar daryaft code moshkeli be vojod amade lotfan dobare talash konid', user: {}  }
        case GET_AUTH_CODE:
            return { ...state, authGetCode: true, loader: { ...state.loader, authGetCodeLoader: false }, user: action.payload, error: '' }
        case GET_AUTH_TOKEN_LOAD:
            return { ...state, loader: { ...state.loader, authGetCodeLoader: false, authGetUserLoader: true } }
        case GET_AUTH_TOKEN_ERR:
            return { ...state, loader: { ...state.loader, authGetCodeLoader: false, authGetUserLoader: false }, error: 'dar daryaft karbar moshkeli be vojod amade lotfan dobare talash konid'  }
        case GET_AUTH_TOKEN:
            return { ...state, authenticated: true, authGetCode: false, loader: { ...state.loader, authGetCodeLoader: false, authGetUserLoader: false }, user: action.payload, error: '' }        
        case UNAUTH_USER:
            return defaultState
      default:
        return state
    }
  }