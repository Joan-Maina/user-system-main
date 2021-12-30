import React from "react";
import Button from "../components/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { registerProject } from "../redux/actions/projects";
import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Add.css";

function Addproject() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { error, message } = useSelector((state) => state.project);
  const [data, setData] = useState({
    projectTitle: "",
    projectClient: "",
    projectStartdate: "",
    projectEnddate: "",
  });

  const handle = (e) => {
    const projectDetails = { ...data };

    projectDetails[e.target.id] = e.target.value;

    setData(projectDetails);
  };
  const submit = async (e) => {
    console.log(data);
    e.preventDefault();
    dispatch(registerProject(data));
    // history.push("/project");
    // window.location.reload();
  };

  const style = {
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    width: "200px",
    marginTop: "10px",
    marginLeft: "5px",
    border: "none",
    borderRadius: "5px",
  };
  return (
    <>
      <Navbar />
      <div className="add">
        <p>Add project</p>
        {error && (
          <h3 style={{ color: "red", fontWeight: "lighter" }}>{error}</h3>
        )}
        {message && (
          <h4 style={{ color: "green", fontWeight: "lighter" }}>{message}</h4>
        )}
        <form onSubmit={(e) => submit(e)} className="form">
          <label>Project title:</label>
          <input
            id="projectTitle"
            onChange={(e) => handle(e)}
            value={data.projectTitle}
            type="text"
            placeholder="enter project title"
            required
          />
          <label>Project client:</label>
          <input
            id="projectClient"
            onChange={(e) => handle(e)}
            value={data.projectClient}
            type="text"
            placeholder="enter client"
            required
          />
          <label>Start date:</label>
          <input
            id="projectStartdate"
            onChange={(e) => handle(e)}
            value={data.projectStartdate}
            type="date"
            required
            min={moment().format("YYYY-MM-DD")}
          />
          <label>End date:</label>
          <input
            id="projectEnddate"
            onChange={(e) => handle(e)}
            value={data.projectEnddate}
            type="date"
            required
            min={data.projectStartdate}
          />
          <Button text="Create project" style={style} />
        </form>
      </div>
    </>
  );
}

export default Addproject;
