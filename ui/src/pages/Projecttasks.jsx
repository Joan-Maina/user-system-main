import React from "react";
import moment from "moment";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProjectTask, getTasks } from "../redux/actions/tasks";
import { useHistory } from "react-router-dom";

function Tasks(id) {
  const projectid = id.location.state.id;
  const dispatch = useDispatch();
  const history = useHistory();

  const { projectTasks } = useSelector((state) => state.task);
  const { users } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");

  const handleDelete = async (taskId) => {
    await dispatch(deleteProjectTask(taskId));
    await dispatch(getTasks(projectid));
  };
  const handleAdd = (projectid) => {
    history.push("/addtask", projectid);
  };

  return (
    <>
      <Navbar />
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Task title</th>

            <th scope="col">Start</th>
            <th scope="col">End</th>
            <th scope="col">Delete</th>
            <th scope="col">Assignment</th>
          </tr>
        </thead>
        <tbody>
          {projectTasks.length > 0 ? (
            projectTasks.map((task) => (
              <tr
                key={task.taskId}
                // onClick={() => handleAssign({ id: task.taskId })}
              >
                <th scope="row">{task.taskId}</th>
                <td>{task.taskTitle}</td>
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
                  <select>
                    {users.map((user) => (
                      <option value={email}>{user.email}</option>
                    ))}
                  </select>
                </td>
              </tr>
            ))
          ) : (
            <td>No tasks</td>
          )}
        </tbody>
      </table>
      <button onClick={() => handleAdd(projectid)}>Add task</button>
    </>
  );
}

export default Tasks;
