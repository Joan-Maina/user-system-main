import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import moment from "moment";
import Button from "../components/Button";
import { registerTask } from "../redux/actions/tasks";

function Tasks(id) {
  const projectid = id.location.state.id;
  const dispatch = useDispatch();
  const [data, setData] = useState({
    projectId: projectid,
    taskTitle: "",
    taskStartdate: "",
    taskEnddate: "",
  });

  const handleChange = (e) => {
    const taskDetails = { ...data };
    console.log(data);
    console.log(taskDetails);
    taskDetails[e.target.id] = e.target.value;

    setData(taskDetails);
  };
  const submit = async (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(registerTask(data));
    // setData();
  };
  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <label>Task title:</label>
        <input
          id="taskTitle"
          onChange={(e) => handleChange(e)}
          value={data.taskTitle}
          type="text"
          placeholder="enter task title"
          required
        />
        <label>Start date:</label>
        <input
          id="taskStartdate"
          onChange={(e) => handleChange(e)}
          value={data.taskStartdate}
          type="date"
          required
          min={moment().format("YYYY-MM-DD")}
        />
        <label>End date:</label>
        <input
          id="taskEnddate"
          onChange={(e) => handleChange(e)}
          value={data.taskEnddate}
          type="date"
          required
          min={data.taskStartdate}
        />
        <Button text="Create task" />
      </form>
    </div>
  );
}

export default Tasks;
