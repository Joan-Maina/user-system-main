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
} from "../types";
const initialState = { loading: false, error: null, tasks: [] };

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTERTASK:
      return {
        ...state,
        loading: true,
        error: null,
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
        loading: true,
        error: null,
      };
    case GET_TASKS_SUCCESS:
      console.log(payload);
      return {
        ...state,
        loading: false,
        tasks: payload,
      };
    case GET_TASKS_FAIL:
      return {
        ...state,
        error: payload,
      };
    case GET_PROJECT_TASKS_SUCCESS:
      console.log(payload);
      return {
        ...state,
        loading: false,
        tasks: payload,
      };
    case GET_PROJECT_TASKS_FAIL:
      return {
        ...state,
        error: payload,
      };
    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        // tasks: tasks.filter((task) => task.taskId !== payload),
      };
    case DELETE_TASK_FAIL:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
