import {
  DELETE_PROJECT_FAIL,
  DELETE_PROJECT_SUCCESS,
  GET_PROJECTS_FAIL,
  GET_PROJECTS_SUCCESS,
  MARK_AS_COMPLETE_FAIL,
  MARK_AS_COMPLETE_SUCCESS,
  REGISTERPROJECT_FAIL,
  REGISTERPROJECT_SUCCESS,
} from "../types";
import axios from "axios";

export const registerProject =
  ({ projectTitle, projectClient, projectStartdate, projectEnddate }) =>
  async (dispatch) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8088/projects/registerproject",
        {
          projectTitle,
          projectClient,
          projectStartdate,
          projectEnddate,
        }
      );
      console.log(data);
      dispatch({
        type: REGISTERPROJECT_SUCCESS,
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: REGISTERPROJECT_FAIL,
        payload: error.message,
      });
    }
  };

export const getProjects = () => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(
      "http://localhost:8088/projects/getallprojects",
      config
    );

    dispatch({
      type: GET_PROJECTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROJECTS_FAIL,
      payload: error,
    });
  }
};
export const deleteProject =
  ({ projectid }) =>
  async (dispatch) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8088/projects/deleteproject",
        {
          projectid,
        }
      );
      if (data.message) {
        dispatch(getProjects());
      } else {
        dispatch({
          type: DELETE_PROJECT_FAIL,
          payload: "failed",
        });
      }
      // console.log(data);
    } catch (error) {
      dispatch({
        type: DELETE_PROJECT_FAIL,
        payload: error.message,
      });
    }
  };
export const markascomplete =
  ({ projectid }) =>
  async (dispatch) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8088/projects/updateproject",
        { projectid }
      );
      console.log(data);
      {
        data.message
          ? dispatch({ type: MARK_AS_COMPLETE_SUCCESS })
          : dispatch({ type: MARK_AS_COMPLETE_FAIL, payload: data });
      }
    } catch (error) {
      dispatch({
        type: MARK_AS_COMPLETE_FAIL,
        payload: error,
      });
    }
  };
