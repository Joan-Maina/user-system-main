import React from "react";
import { getallusers } from "../redux/actions/auth";
import moment from "moment";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../redux/actions/auth";
import {
  getalltasks,
  deleteTask,
  assigntask,
  marktaskcomplete,
  getassignedtasks,
} from "../redux/actions/tasks";
import { useState } from "react";
import "../styles/Tasks.css";

function Tasks() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = JSON.parse(localStorage.getItem("user"));

  const { tasks, assignedtasks } = useSelector((state) => state.task);
  const { users } = useSelector((state) => state.auth);
  const [data, setData] = useState({
    email: "",
    taskId: "",
  });
  console.log(tasks);
  useEffect(() => {
    dispatch(getalltasks());
    dispatch(getassignedtasks(user));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getallusers());
  }, [dispatch]);
  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
    window.location.reload();
  };

  const handleComplete = (taskid) => {
    dispatch(marktaskcomplete(taskid));
    window.location.reload();
  };
  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  };
  return (
    <>
      {user.isAdmin ? (
        <>
          {" "}
          <Navbar />
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Task title</th>

                <th scope="col"> Project</th>
                <th scope="col">Start</th>
                <th scope="col">End</th>
                <th scope="col">Delete</th>
                <th scope="col">Assign</th>
              </tr>
            </thead>
            <tbody>
              {tasks.length > 0 ? (
                tasks.map((task) => (
                  <tr
                    key={task.taskId}
                    style={
                      task.isCompleted
                        ? { backgroundColor: "#ADD8E6" }
                        : { backgroundColor: "white" }
                    }
                  >
                    <th scope="row">
                      {!task.isCompleted ? (
                        <input
                          style={{ width: "20px" }}
                          type="checkbox"
                          id="complete"
                          name="taskcomplete"
                          value={task.complete}
                          onChange={() => handleComplete(task.taskId)}
                        />
                      ) : (
                        "completed"
                      )}
                    </th>
                    <td>{task.taskTitle}</td>
                    <td>{task.projectTitle}</td>
                    <td>{moment(task.taskStartdate).format("dddd Do MMMM")}</td>
                    <td>{moment(task.taskEnddate).format("dddd Do MMMM")}</td>
                    <td>
                      <i
                        class="fa fa-trash"
                        aria-hidden="true"
                        onClick={() => handleDelete({ taskId: task.taskId })}
                      ></i>
                    </td>
                    <td>{task.isAssigned ? "Assigned" : "Not assigned"}</td>
                  </tr>
                ))
              ) : (
                <td>No tasks</td>
              )}
            </tbody>
          </table>
        </>
      ) : (
        <>
          <table class="table" id="usertasks">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Task title</th>

                <th scope="col"> Project</th>
                <th scope="col">Start</th>
                <th scope="col">End</th>
              </tr>
            </thead>
            <tbody>
              {assignedtasks.length > 0 ? (
                assignedtasks.map((task) => (
                  <tr
                    key={task.taskId}
                    style={
                      task.isCompleted
                        ? { backgroundColor: "#87CEEB" }
                        : { backgroundColor: "white" }
                    }
                  >
                    <th scope="row">
                      {!task.isCompleted ? (
                        <input
                          style={{ width: "20px" }}
                          type="checkbox"
                          id="complete"
                          name="taskcomplete"
                          value={task.complete}
                          onChange={() => handleComplete(task.taskId)}
                        />
                      ) : (
                        "completed"
                      )}
                    </th>
                    <td>{task.taskTitle}</td>
                    <td>{task.projectTitle}</td>
                    <td>{moment(task.taskStartdate).format("dddd Do MMMM")}</td>
                    <td>{moment(task.taskEnddate).format("dddd Do MMMM")}</td>
                  </tr>
                ))
              ) : (
                <td>No tasks</td>
              )}
            </tbody>
          </table>
          <button className="logout" onClick={() => handleLogout()}>
            log out
          </button>
        </>
      )}
    </>
  );
}

export default Tasks;
