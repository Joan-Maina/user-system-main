import {
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  UPDATEPASSWORDSUCCESS,
  UPDATEPASSWORDFAIL,
  GET_UNASSIGNED_USERSUCCESS,
  GET_UNASSIGNED_USERSFAIL,
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
      console.log(data);
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
  ({ firstname, lastname, email, phone, password, confirmpassword }) =>
  async (dispatch) => {
    try {
      const { data } = await axios.post("http://localhost:8000/users/signup", {
        firstname,
        lastname,
        email,
        phone,
        password,
        confirmpassword,
      });
      console.log(data.message);

      dispatch({
        type: ADD_USER_SUCCESS,
        payload: data.message,
      });
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: ADD_USER_FAIL,
        payload: error.message,
      });
    }
  };

export const logout = () => (dispatch) => {
  localStorage.removeItem("user");
  dispatch({
    type: LOGOUT,
  });
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
    console.log(data);
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_USERS_FAIL,
      payload: error.message,
    });
  }
};
export const deleteUser = (user) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:8000/users/deleteuser",
      {
        email: user,
      }
    );
    console.log(data);
  } catch (error) {
    // dispatch({});
  }
};
export const resetpassword =
  ({ firstname, lastname, email, password, confirmpassword }) =>
  async (dispatch) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/users/updatepassword",
        {
          firstname,
          lastname,
          email,
          password,
          confirmpassword,
        }
      );
      console.log(data);
      dispatch({
        type: UPDATEPASSWORDSUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error.response.data);
      dispatch({
        type: UPDATEPASSWORDFAIL,
        payload: error.response.data,
      });
    }
  };

export const getunassignedusers = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "http://localhost:8000/users/getunassignedusers"
    );
    dispatch({
      type: GET_UNASSIGNED_USERSUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_UNASSIGNED_USERSFAIL,
      payload: error.message,
    });
  }
};
