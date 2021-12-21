import {
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
} from "../types";
import axios from "axios";

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const { data } = await axios.post("http://localhost:8000/users/login", {
        email,
        password,
      });
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data));
        dispatch({
          type: LOGIN_SUCCESS,
          payload: data.user,
        });
      } else {
        dispatch({
          type: LOGIN_FAIL,
          payload: data.message,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

export const register =
  ({ firstname, lastname, email, password, confirmpassword }) =>
  async (dispatch) => {
    try {
      const { data } = await axios.post("http://localhost:8000/users/signup", {
        firstname,
        lastname,
        email,
        password,
        confirmpassword,
      });

      dispatch({
        type: GET_USER_SUCCESS,
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: GET_USER_FAIL,
        payload: error,
      });
    }
  };

export const logout = () => (dispatch) => {
  console.log(localStorage);
  localStorage.removeItem("user");
  // dispatch({
  //   type: LOGOUT,
  // });
};

export const getallusers = () => async (dispatch) => {
  try {
    let { token } = JSON.parse(localStorage.getItem("user"));
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(token);

    const { data } = await axios.post(
      "http://localhost:8000/users/getusers",
      {},
      config
    );
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_USERS_FAIL,
      payload: error,
    });
  }
};
