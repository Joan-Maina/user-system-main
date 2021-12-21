import axios from "axios";
import {
  GET_TASKS_FAIL,
  GET_TASKS_SUCCESS,
  REGISTERTASK_FAIL,
  REGISTERTASK_SUCCESS,
  DELETE_TASK_FAIL,
  GET_PROJECT_TASKS_FAIL,
  GET_PROJECT_TASKS_SUCCESS,
} from "../types";

export const registerTask =
  ({ taskTitle, projectId, taskStartdate, taskEnddate }) =>
  async (dispatch) => {
    console.log(taskTitle);
    try {
      const { data } = await axios.post(
        "http://localhost:8088/tasks/registertask",
        {
          taskTitle,
          projectId,
          taskStartdate,
          taskEnddate,
        }
      );
      console.log(data);
      setTimeout(alert("moo"), 10000);
      dispatch({
        type: REGISTERTASK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: REGISTERTASK_FAIL,
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
    console.log(data.message);
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
  console.log(taskId);
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
  } catch (error) {}
};
