import React from "react";
import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcompleteprojects } from "../redux/actions/projects";
import Navbar from "../components/Navbar";

function Complete() {
  const dispatch = useDispatch();
  const { completeprojects } = useSelector((state) => state.project);
  console.log(completeprojects);
  useEffect(() => {
    dispatch(getcompleteprojects());
  }, [dispatch]);

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
          {completeprojects.length > 0 ? (
            completeprojects.map((project) => (
              <tr key={project.projectId}>
                <th>{project.projectId}</th>

                <td>{project.projectTitle}</td>
                <td>
                  {moment(project.projectStartDate).format("dddd Do MMMM")}
                </td>
                <td>{moment(project.projectEnddate).format("dddd Do MMMM")}</td>
                <td>
                  <i
                    class="fa fa-trash"
                    aria-hidden="true"
                    // onClick={() =>
                    // handleDelete({ projectid: project.projectId })
                    // }
                  ></i>
                </td>
              </tr>
            ))
          ) : (
            <td>No projects</td>
          )}
        </tbody>
      </table>
      {/* 
      <Link to="/addproject">
        <Button text="Add project" style={style} />
      </Link>
      <Link to="/completed">
        <Button text="View completed projects" style={style} />
      </Link> */}
      {/* {error && <h4 style={{ color: "red" }}>{error}</h4>} */}
    </>
  );
}

export default Complete;
