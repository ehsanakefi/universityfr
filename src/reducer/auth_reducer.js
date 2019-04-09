import {
  GET_AUTH_REGISTER_LOAD,
  GET_AUTH_REGISTER_ERR,
  GET_AUTH_REGISTER,
  GET_AUTH_TOKEN_LOAD,
  GET_AUTH_TOKEN_ERR,
  GET_AUTH_TOKEN,
  UNAUTH_USER
} from "../actions/types";

const defaultState = {
  authGetREGISTER: false,
  user: {},
  authenticated: false,
  error: "",
  loader: {
    authGetREGISTERLoader: false,
    authGetUserLoader: false
  }
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_AUTH_REGISTER_LOAD:
      return {
        ...state,
        loader: { ...state.loader, authGetREGISTERLoader: true }
      };
    case GET_AUTH_REGISTER_ERR:
      return {
        ...state,
        loader: { ...state.loader, authGetREGISTERLoader: false },
        error:
          "dar daryaft REGISTER moshkeli be vojod amade lotfan dobare talash konid",
        user: {}
      };
    case GET_AUTH_REGISTER:
 
      return {
        ...state,
        authGetREGISTER: true,
        loader: { ...state.loader, authGetREGISTERLoader: false },
        user: action.payload,
        error: ""
      };
    case GET_AUTH_TOKEN_LOAD:
      return {
        ...state,
        loader: {
          ...state.loader,
          authGetREGISTERLoader: false,
          authGetUserLoader: true
        }
      };
    case GET_AUTH_TOKEN_ERR:
      return {
        ...state,
        loader: {
          ...state.loader,
          authGetREGISTERLoader: false,
          authGetUserLoader: false
        },
        error:
          "dar daryaft karbar moshkeli be vojod amade lotfan dobare talash konid"
      };
    case GET_AUTH_TOKEN:
      return {
        ...state,
        authenticated: true,
        authGetREGISTER: false,
        loader: {
          ...state.loader,
          authGetREGISTERLoader: false,
          authGetUserLoader: false
        },
        user: action.payload,
        error: ""
      };
    case UNAUTH_USER:
      return defaultState;
    default:
      return state;
  }
};
