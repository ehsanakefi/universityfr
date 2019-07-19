import axios from "axios";
import {
  ADD_PROFESOR_LOADER,
  ADD_PROFESOR,
  ADD_PROFESOR_ERR,
  GET_PERSONS_LOADER,
  GET_PERSONS,
  GET_PERSONS_ERR
} from "./types";
import { Token } from "../Token";

axios.defaults.headers.common["registertoken"] = Token;

export const addProfesor = d => {
  console.log(d)
  return dispatch => {
    dispatch({ type: ADD_PROFESOR_LOADER });

    return axios
      .post("http://localhost:1375/addProfesor", d)
      .then(resp =>
        dispatch({ type: ADD_PROFESOR, payload: resp.data.profesorsave })
      )
      .catch(err =>
        dispatch({ type: ADD_PROFESOR_ERR, payload: err.respnse.data })
      );
  };
};

export const getPerson = () => {
  return dispatch => {
    dispatch({ type: GET_PERSONS_LOADER });
    axios
      .get("http://localhost:1375/getProfesor")
      .then(resp =>
        dispatch({
          type: GET_PERSONS,
          payload: resp.data.profesorsreq
        })
      )
      .catch(err => dispatch({ type: GET_PERSONS_ERR }));
  };
};
export const setCurrentProfesor = d => ({
  type: "SET_CURRENT_PROFESOR",
  payload: d
});
