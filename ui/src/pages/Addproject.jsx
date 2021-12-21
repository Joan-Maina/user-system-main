import React from "react";
import Button from "../components/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { registerProject } from "../redux/actions/projects";

function Addproject() {
  const dispatch = useDispatch();
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
    // setData();
  };
  return (
    <>
      <form onSubmit={(e) => submit(e)}>
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
        <Button text="Create project" />
      </form>
    </>
  );
}

export default Addproject;
