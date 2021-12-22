import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Project.css";
import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProjects,
  deleteProject,
  markascomplete,
} from "../redux/actions/projects";
import { getallusers } from "../redux/actions/auth";
import { Link, useHistory } from "react-router-dom";
import Button from "../components/Button";
import { getTasks } from "../redux/actions/tasks";

function Project() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { projects } = useSelector((state) => state.project);
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  const handleDelete = (projectid) => {
    dispatch(deleteProject(projectid));
  };
  const handleClick = async (id) => {
    await dispatch(getTasks(id));

    dispatch(getallusers());

    history.push("/projecttasks", id);
  };
  const handleDoubleclick = async (projectid) => {
    dispatch(markascomplete(projectid));
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
                onDoubleClick={() =>
                  handleDoubleclick({ projectid: project.projectId })
                }
                style={
                  project.isCompleted
                    ? { backgroundColor: "green" }
                    : { backgroundColor: "white" }
                }
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
