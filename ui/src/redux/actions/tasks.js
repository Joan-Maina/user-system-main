import axios from "axios";
import {
  GET_TASKS_FAIL,
  GET_TASKS_SUCCESS,
  REGISTERTASK_FAIL,
  REGISTERTASK_SUCCESS,
  DELETE_TASK_FAIL,
  GET_PROJECT_TASKS_FAIL,
  GET_PROJECT_TASKS_SUCCESS,
  DELETE_TASK_SUCCESS,
  ASSIGN_TASK_FAIL,
  ASSIGN_TASK_SUCCESS,
  MARK_AS_COMPLETE_SUCCESS,
  MARK_AS_COMPLETE_FAIL,
  MARK_TASK_COMPLETE_SUCCESS,
  MARK_TASK_COMPLETE_FAIL,
  REGISTERTASK,
} from "../types";

export const registerTask =
  ({ taskTitle, projectId, taskStartdate, taskEnddate }) =>
  async (dispatch) => {
    console.log(taskTitle);
    try {
      dispatch({
        type: REGISTERTASK,
      });
      const { data } = await axios.post(
        "http://localhost:8088/tasks/registertask",
        {
          taskTitle,
          projectId,
          taskStartdate,
          taskEnddate,
        }
      );
      dispatch({
        type: REGISTERTASK_SUCCESS,
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: REGISTERTASK_FAIL,
        payload: error.message,
      });
    }
  };
export const getTasks = (id) => async (dispatch) => {
  try {
    console.log(id);
    const { data } = await axios.post(
      "http://localhost:8088/tasks/getprojecttasks",
      id
    );
    console.log(data);
    if (data.message) {
      dispatch({
        type: GET_PROJECT_TASKS_FAIL,
        payload: data.message,
      });
    } else {
      dispatch({
        type: GET_PROJECT_TASKS_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: GET_PROJECT_TASKS_FAIL,
      payload: error,
    });
  }
};

export const getalltasks = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:8088/tasks/getalltasks");
    console.log(data);
    dispatch({
      type: GET_TASKS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_TASKS_FAIL,
    });
  }
};

export const deleteTask = (taskId) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:8088/tasks/deletetask",

      taskId
    );
    console.log(data);
    if (data.message) {
      dispatch(getalltasks());
    } else {
      dispatch({
        type: DELETE_TASK_FAIL,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: DELETE_TASK_FAIL,
      payload: error,
    });
  }
};

export const deleteProjectTask = (taskId) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:8088/tasks/deletetask",

      taskId
    );
    console.log(data);
    if (data.message) {
      dispatch({
        type: DELETE_TASK_SUCCESS,
        payload: taskId,
      });
    } else {
      dispatch({
        type: DELETE_TASK_FAIL,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: DELETE_TASK_FAIL,
      payload: error,
    });
  }
};
export const assigntask =
  ({ email, taskId }) =>
  async (dispatch) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8088/tasks/assigntask",

        { email, taskId }
      );
      console.log(data);
      dispatch({
        type: ASSIGN_TASK_SUCCESS,
      });
    } catch (error) {
      console.log(error);

      dispatch({
        type: ASSIGN_TASK_FAIL,
        payload: error,
      });
    }
  };
export const marktaskcomplete = (taskid) => async (dispatch) => {
  console.log(taskid);
  try {
    const { data } = await axios.post(
      "http://localhost:8088/tasks/updatetask",
      { taskid }
    );
    console.log(data);
    dispatch({
      type: MARK_TASK_COMPLETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: MARK_TASK_COMPLETE_FAIL,
      payload: error,
    });
  }
};
