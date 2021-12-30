import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Project.css";
import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactTooltip from "react-tooltip";
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
  const user = JSON.parse(localStorage.getItem("user"));
  const { message } = useSelector((state) => state.task);
  const { projects, error } = useSelector((state) => state.project);

  console.log(projects);

  const handleDelete = (projectid) => {
    dispatch(deleteProject(projectid));

    window.location.reload();
  };
  const handleClick = async (id) => {
    await dispatch(getTasks(id));
    console.log(id);
    dispatch(getallusers());

    history.push("/projecttasks", id);
  };
  const handleAddMember = (id) => {
    history.push("/addmembers", id);
  };
  const handleComplete = (id) => {
    dispatch(markascomplete(id));
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
  useEffect(() => {
    dispatch(getProjects());
  }, []);
  return (
    <>
      {user.user.isAdmin ? (
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
                    style={
                      project.isCompleted
                        ? { backgroundColor: "green" }
                        : { backgroundColor: "white" }
                    }
                  >
                    {project.userone == null ? (
                      <th
                        style={{ color: "red" }}
                        onClick={() => handleAddMember(project.projectId)}
                      >
                        Add members
                      </th>
                    ) : (
                      <th scope="row">
                        <input
                          style={{ width: "20px" }}
                          type="checkbox"
                          id="complete"
                          name="taskcomplete"
                          onChange={() => handleComplete(project.projectId)}
                        />
                      </th>
                    )}

                    <td
                      data-tip="view tasks"
                      onClick={() => handleClick({ id: project.projectId })}
                    >
                      {project.projectTitle}
                    </td>
                    <td>
                      {moment(project.projectStartDate).format("dddd Do MMMM")}
                    </td>
                    <td>
                      {moment(project.projectEnddate).format("dddd Do MMMM")}
                    </td>
                    <td>
                      <i
                        class="fa fa-trash"
                        aria-hidden="true"
                        data-tip="delete project"
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
            <ReactTooltip effect="float" place="right" />
          </table>

          <Link to="/addproject">
            <Button text="Add project" style={style} />
          </Link>
          <Link to="/completed">
            <Button text="View completed projects" style={style} />
          </Link>
          {/* {error && <h4 style={{ color: "red" }}>{error}</h4>} */}
        </>
      ) : (
        <>
          <p>forbidden acess</p>
        </>
      )}
    </>
  );
}

export default Project;
