import React from "react";
import { getallusers } from "../redux/actions/auth";
import moment from "moment";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getalltasks, deleteTask } from "../redux/actions/tasks";

function Tasks() {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.task);
  useEffect(() => {
    dispatch(getalltasks());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getallusers());
  }, [dispatch]);
  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
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
              <tr key={task.taskId}>
                <th scope="row">{task.taskId}</th>
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
                  <select>
                    <option>Volvo</option>
                    <option>JOna</option>
                  </select>
                </td>
              </tr>
            ))
          ) : (
            <td>No tasks</td>
          )}
        </tbody>
      </table>
      {/* <Link to={"/addtask"}>
        <Button text={"Add task"} />
      </Link> */}
    </>
  );
}

export default Tasks;
