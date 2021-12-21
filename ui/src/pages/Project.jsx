import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Project.css";
import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects, deleteProject } from "../redux/actions/projects";
import { Link, useHistory } from "react-router-dom";
import Button from "../components/Button";
import { getTasks } from "../redux/actions/tasks";

function Project() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { projects } = useSelector((state) => state.project);
  const { tasks } = useSelector((state) => state.task);
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  const style = {
    borderRadius: "5px",
    backgroundColor: "black",
    color: "white",
  };
  const handleDelete = (projectid) => {
    dispatch(deleteProject(projectid));
  };
  const handleClick = async (id) => {
    // await dispatch(getTasks(id));
    // if (tasks.length === 0) {
    // const opinion = window.confirm("Create a new task");
    // if (opinion) {
    // history.push("/addtask", id);
    // }
    // } else {
    history.push("/projecttasks", id);
  };
  return (
    <>
      <Navbar />

      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Project title</th>
            <th scope="col">Start</th>
            <th scope="col">End</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {projects.length > 0 ? (
            projects.map((project) => (
              <tr
                key={project.projectId}
                onClick={() => handleClick({ id: project.projectId })}
              >
                <th scope="row">{project.projectId}</th>
                <td>{project.projectTitle}</td>
                <td>
                  {moment(project.projectStartDate).format("dddd Do MMMM")}
                </td>
                <td>{moment(project.projectEnddate).format("dddd Do MMMM")}</td>
                <td>
                  <i
                    class="fa fa-trash"
                    aria-hidden="true"
                    onClick={() =>
                      handleDelete({ projectid: project.projectId })
                    }
                  ></i>
                </td>
              </tr>
            ))
          ) : (
            <td>No projects</td>
          )}
        </tbody>
      </table>
      <Link to="/addproject">
        <Button text="Add project" />
      </Link>
    </>
  );
}

export default Project;
