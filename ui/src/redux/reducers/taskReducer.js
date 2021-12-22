import {
  GET_TASKS_FAIL,
  GET_TASKS_SUCCESS,
  REGISTERTASK,
  REGISTERTASK_SUCCESS,
  REGISTERTASK_FAIL,
  DELETE_TASK_FAIL,
  GET_PROJECT_TASKS_FAIL,
  GET_PROJECT_TASKS_SUCCESS,
  DELETE_TASK_SUCCESS,
  ASSIGN_TASK_SUCCESS,
  ASSIGN_TASK_FAIL,
  MARK_TASK_COMPLETE_SUCCESS,
  MARK_TASK_COMPLETE_FAIL,
} from "../types";
const initialState = {
  loading: false,
  error: "",
  tasks: [],
  projectTasks: [],
  message: "",
};

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTERTASK:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case REGISTERTASK_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case REGISTERTASK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        message: payload,
      };
    case GET_TASKS_SUCCESS:
      console.log(payload);
      return {
        ...state,
        loading: false,
        error: "",
        tasks: payload,
      };
    case GET_TASKS_FAIL:
      return {
        ...state,
        error: payload,
      };
    case GET_PROJECT_TASKS_SUCCESS:
      return {
        ...state,
        error: "",
        loading: false,
        projectTasks: payload,
      };
    case GET_PROJECT_TASKS_FAIL:
      return {
        ...state,
        projectTasks: [],
        error: payload,
      };
    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        error: "",
      };
    case DELETE_TASK_FAIL:
      return {
        ...state,
        error: payload,
      };
    case ASSIGN_TASK_SUCCESS:
      return {
        ...state,
        error: "",
      };
    case ASSIGN_TASK_FAIL:
      return {
        ...state,
        error: payload,
      };
    case MARK_TASK_COMPLETE_SUCCESS:
      return {
        ...state,
        error: "",
      };
    case MARK_TASK_COMPLETE_FAIL:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
