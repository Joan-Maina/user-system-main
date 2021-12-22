import {
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
} from "../types";

const user = JSON.parse(localStorage.getItem("user"));
console.log(user);
const initialState = {
  user: {},
  users: [],
  error: "",
  message: "",
};

const authReducer = (state = initialState, { type, payload, message }) => {
  switch (type) {
    case GET_USER_SUCCESS:
      return {
        ...state,
        error: "",
        message: message,
      };
    case GET_USER_FAIL:
      return {
        ...state,
        error: payload,
        message: "",
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: [...payload],
      };
    case GET_USERS_FAIL:
      return {
        ...state,
        error: payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: payload,
        user: {},
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: {},
      };

    default:
      return state;
  }
};

export default authReducer;
