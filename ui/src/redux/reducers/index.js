import { combineReducers } from "redux";
import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import taskReducer from "./taskReducer";

export default combineReducers({
  auth: authReducer,
  project: projectReducer,
  task: taskReducer,
});
