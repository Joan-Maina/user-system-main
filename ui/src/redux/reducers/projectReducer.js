import {
  DELETE_PROJECT_FAIL,
  DELETE_PROJECT_SUCCESS,
  GET_PROJECTS_FAIL,
  GET_PROJECTS_SUCCESS,
  REGISTERPROJECT,
  REGISTERPROJECT_FAIL,
  REGISTERPROJECT_SUCCESS,
} from "../types";

const initialState = { loading: false, error: null, projects: [] };
const projectReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTERPROJECT:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REGISTERPROJECT_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case REGISTERPROJECT_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: payload,
      };
    case GET_PROJECTS_FAIL:
      return {
        ...state,
        error: payload,
      };
    case DELETE_PROJECT_SUCCESS:
      return {
        ...state,
      };
    case DELETE_PROJECT_FAIL:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default projectReducer;
