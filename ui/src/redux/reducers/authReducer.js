import {
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
  UPDATEPASSWORDFAIL,
  UPDATEPASSWORDSUCCESS,
  GET_UNASSIGNED_USERSUCCESS,
  GET_UNASSIGNED_USERSFAIL,
} from "../types";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: {},
  users: [],
  error: "",
  message: "",
};

const authReducer = (state = initialState, { type, payload, message }) => {
  switch (type) {
    case ADD_USER_SUCCESS:
      return {
        ...state,
        error: "",
        message: payload,
      };
    case ADD_USER_FAIL:
      return {
        ...state,
        error: payload,
        message: "",
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        message: "successfully got users",
        error: "",
        users: [...payload],
      };
    case GET_USERS_FAIL:
      return {
        ...state,
        message: "",
        error: payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: payload,
        message: "",
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        message: "",
        error: "",
        user: payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: {},
        message: "",
        error: "",
      };
    case UPDATEPASSWORDFAIL:
      console.log(payload);

      return {
        ...state,
        message: "",
        error: payload,
        user: {},
      };
    case UPDATEPASSWORDSUCCESS:
      return {
        ...state,
        message: payload,
        error: "",
        user: {},
      };
    case GET_UNASSIGNED_USERSUCCESS:
      return {
        ...state,
        message: "",
        error: "",
        users: payload,
      };
    case GET_UNASSIGNED_USERSFAIL:
      return {
        ...state,
        message: "",
        users: [],
        error: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
