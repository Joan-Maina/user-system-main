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
  GET_ASSIGNED_TASKSFAIL,
  GET_ASSIGNED_TASKSUCCESS,
} from "../types";
const initialState = {
  loading: false,
  error: "",
  tasks: [],
  projectTasks: [],
  assignedtasks: [],
  message: "",
};

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTERTASK:
      return {
        ...state,
        loading: true,
        error: "",
        message: "",
      };
    case REGISTERTASK_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
        message: "",
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
        message: "",
      };
    case GET_TASKS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
        message: "",
      };
    case GET_PROJECT_TASKS_SUCCESS:
      return {
        ...state,
        error: "",
        loading: false,
        message: "",

        projectTasks: payload,
      };
    case GET_PROJECT_TASKS_FAIL:
      return {
        ...state,
        projectTasks: [],
        message: "",
        loading: false,
        error: payload,
      };
    case DELETE_TASK_SUCCESS:
      const newstate = state.tasks.filter((task) => task.taskId !== payload);
      return {
        ...state,
        message: "",
        loading: false,
        tasks: newstate,
        error: "",
      };
    case DELETE_TASK_FAIL:
      return {
        ...state,
        error: payload,
        message: "",
        loading: false,
      };
    case ASSIGN_TASK_SUCCESS:
      return {
        ...state,
        error: "",
        message: "",
        loading: false,
      };
    case ASSIGN_TASK_FAIL:
      return {
        ...state,
        error: payload,
        message: "",
        loading: false,
      };
    case MARK_TASK_COMPLETE_SUCCESS:
      return {
        ...state,
        error: "",
        message: "",
        loading: false,
      };
    case MARK_TASK_COMPLETE_FAIL:
      return {
        ...state,
        error: payload,
        message: "",
        loading: false,
      };
    case GET_ASSIGNED_TASKSFAIL:
      return {
        ...state,
        error: payload,
        message: "",
        loading: false,
      };
    case GET_ASSIGNED_TASKSUCCESS:
      return {
        ...state,
        message: "",
        error: "",
        loading: false,
        assignedtasks: payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
