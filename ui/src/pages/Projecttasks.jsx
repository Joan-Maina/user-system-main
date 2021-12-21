import React from "react";
import Button from "../components/Button";
import moment from "moment";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getalltasks, deleteTask, getTasks } from "../redux/actions/tasks";
import { Link } from "react-router-dom";

function Tasks(id) {
  const projectid = id.location.state.id;
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.task);
  // useEffect(() => {
  //   dispatch(getTasks({ id: projectid }));
  // }, [dispatch]);
  console.log(tasks);
  const handleDelete = (taskId) => {
    console.log("jo");
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

            <th scope="col">Start</th>
            <th scope="col">End</th>
            <th scope="col">Delete</th>
            <th scope="col">Assignment</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
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
                <div class="dropdown" style={{ width: "10px" }}>
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ width: "10px" }}
                  >
                    Dropdown button
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
              </tr>
            ))
          ) : (
            <td>No tasks</td>
          )}
        </tbody>
      </table>
      <Link to={"/addtask"}>
        <Button text={"Add task"} />
      </Link>
    </>
  );
}

export default Tasks;
