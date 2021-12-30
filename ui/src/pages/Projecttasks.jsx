import React from "react";
import moment from "moment";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProjectTask,
  getTasks,
  marktaskcomplete,
  assigntask,
} from "../redux/actions/tasks";
import { useHistory } from "react-router-dom";

function Tasks(id) {
  const projectid = id.location.state.id;
  const dispatch = useDispatch();
  const history = useHistory();
  const { projectTasks } = useSelector((state) => state.task);
  const { projects } = useSelector((state) => state.project);
  const [data, setData] = useState({
    taskId: "",
    email: "",
  });

  const handleDelete = async (taskId) => {
    await dispatch(deleteProjectTask(taskId));
    await dispatch(getTasks(projectid));
  };
  const project = projects.filter((project) => project.projectId === projectid);
  console.log(project[0].userone);
  const handleAddTask = (projectid) => {
    history.push("/addtask", projectid);
  };

  const style = {
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    width: "fit-content",
    marginTop: "10px",
    marginLeft: "50px",
    marginBottom: "20px",
    border: "none",
    borderRadius: "5px",
  };

  const handleChange = (e, taskId) => {
    e.preventDefault();
    data[e.target.id] = e.target.value;

    data["taskId"] = taskId;

    setData(data);
    dispatch(assigntask(data));
  };
  console.log(projectTasks);
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
                style={
                  task.isCompleted
                    ? { backgroundColor: "#ADD8E6" }
                    : { backgroundColor: "white" }
                }
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
                <td style={{ color: "red" }}>
                  {task.isAssigned ? (
                    "Assigned"
                  ) : (
                    <select
                      id="email"
                      value={data}
                      onChange={(e) => handleChange(e, task.taskId)}
                    >
                      <option value={project[0].userone}>
                        {project[0].userone}
                      </option>
                      <option value={project[0].usertwo}>
                        {project[0].usertwo}
                      </option>
                      <option value={project[0].userthree}>
                        {project[0].userthree}
                      </option>
                      <option value={project[0].userfour}>
                        {project[0].userfour}
                      </option>
                      <option value={project[0].userfive}>
                        {project[0].userfive}
                      </option>
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
      <button onClick={() => handleAddTask(projectid)} style={style}>
        Add task
      </button>
    </>
  );
}

export default Tasks;
