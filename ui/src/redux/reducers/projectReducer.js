import {
  ASSIGN_PROJECT_FAIL,
  ASSIGN_PROJECT_SUCCESS,
  DELETE_PROJECT_FAIL,
  DELETE_PROJECT_SUCCESS,
  GET_COMPLETE_PROJECTFAIL,
  GET_COMPLETE_PROJECTSUCCESS,
  GET_PROJECTS_FAIL,
  GET_PROJECTS_SUCCESS,
  MARK_AS_COMPLETE_FAIL,
  MARK_AS_COMPLETE_SUCCESS,
  REGISTERPROJECT,
  REGISTERPROJECT_FAIL,
  REGISTERPROJECT_SUCCESS,
} from "../types";

const initialState = {
  loading: false,
  error: "",
  projects: [],
  completeprojects: [],
  message: "",
};
const projectReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTERPROJECT:
      return {
        ...state,
        loading: true,
        error: "",
        message: "",
      };
    case REGISTERPROJECT_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
        message: "",
      };
    case REGISTERPROJECT_SUCCESS:
      return {
        ...state,
        message: payload,
        loading: true,
        error: "",
      };
    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: payload,
        error: "",
        message: "",
      };
    case GET_PROJECTS_FAIL:
      return {
        ...state,
        message: "",
        error: payload,
      };
    case DELETE_PROJECT_SUCCESS:
      const newstate = state.projects.filter(
        (project) => project.projectId !== payload
      );
      return {
        ...state,
        projects: newstate,

        message: payload,
        error: "",
      };
    case DELETE_PROJECT_FAIL:
      return {
        ...state,
        error: payload,
        message: "",
      };
    case MARK_AS_COMPLETE_SUCCESS:
      return {
        ...state,
        message: "",
        error: "",
      };
    case MARK_AS_COMPLETE_FAIL:
      return {
        ...state,
        error: payload,
        message: "",
      };
    case ASSIGN_PROJECT_SUCCESS:
      return {
        ...state,
        error: "",
        message: payload,
      };
    case ASSIGN_PROJECT_FAIL:
      return {
        ...state,
        error: payload,
        message: "",
      };
    case GET_COMPLETE_PROJECTFAIL:
      return {
        ...state,
        error: payload,
        message: "",
        completeprojects: [],
      };
    case GET_COMPLETE_PROJECTSUCCESS:
      return {
        ...state,
        error: "",
        message: "successfully got complete projects",
        completeprojects: payload,
      };
    default:
      return state;
  }
};

export default projectReducer;
