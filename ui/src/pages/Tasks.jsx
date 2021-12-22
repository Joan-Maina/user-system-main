import React from "react";
import { getallusers } from "../redux/actions/auth";
import moment from "moment";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getalltasks,
  deleteTask,
  assigntask,
  marktaskcomplete,
} from "../redux/actions/tasks";
import { useState } from "react";

function Tasks() {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.task);
  const { users } = useSelector((state) => state.auth);
  const [data, setData] = useState({
    email: "",
    taskId: "",
  });
  // const [task, setTask] = useState();

  useEffect(() => {
    dispatch(getalltasks());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getallusers());
  }, [dispatch]);
  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };
  const handleChange = (e, taskId) => {
    e.preventDefault();
    data[e.target.id] = e.target.value;
    data["taskId"] = taskId;
    setData(data);
    dispatch(assigntask(data));
    dispatch(getalltasks());
  };
  const handleComplete = (taskid) => {
    console.log(taskid);
    dispatch(marktaskcomplete(taskid));
    dispatch(getalltasks());
  };
  return (
    <>
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
                    ? { backgroundColor: "green" }
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
                <td>
                  {task.isAssigned ? (
                    "Assigned"
                  ) : (
                    <select
                      value={data.email}
                      id="email"
                      onChange={(e) => handleChange(e, task.taskId)}
                    >
                      {" "}
                      {users.map((user) => (
                        <option name={user.email}>{user.email}</option>
                      ))}
                    </select>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <td>No tasks</td>
          )}
        </tbody>
      </table>
    </>
  );
}

export default Tasks;
