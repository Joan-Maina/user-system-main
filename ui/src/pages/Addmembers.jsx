import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getunassignedusers } from "../redux/actions/auth";
import Navbar from "../components/Navbar";
import "../styles/Add.css";
import { assignproject } from "../redux/actions/projects";

function Addmembers(id) {
  const projectid = id.location.state;
  console.log(projectid);
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.auth);
  console.log(users);
  const [data, setData] = useState({
    projectid: projectid,
    userone: "",
    usertwo: "",
    userthree: "",
    userfour: "",
    userfive: "",
  });
  const handleChange = (e) => {
    const memberDetails = { ...data };

    memberDetails[e.target.id] = e.target.value;

    setData(memberDetails);
  };
  const submit = async (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(assignproject(data));
  };
  useEffect(() => {
    dispatch(getunassignedusers());
  }, [dispatch]);
  const style = {
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    width: "200px",
    marginTop: "10px",
    marginLeft: "25px",
    border: "none",
    borderRadius: "5px",
  };
  return (
    <>
      <Navbar />
      <div className="add">
        <p>joan</p>
        <form className="membersform" onSubmit={(e) => submit(e)}>
          <label>Add user one:</label>
          <select
            value={data.userone}
            id="userone"
            onChange={(e) => handleChange(e)}
          >
            {users.map((user) => (
              <option name={user.email}>{user.email}</option>
            ))}
          </select>
          <label>Add user two:</label>
          <select
            value={data.usertwo}
            id="usertwo"
            onChange={(e) => handleChange(e)}
          >
            {users.map((user) => (
              <option name={user.email}>{user.email}</option>
            ))}
          </select>
          <label>Add user three:</label>
          <select
            value={data.userthree}
            id="userthree"
            onChange={(e) => handleChange(e)}
          >
            {users.map((user) => (
              <option name={user.email}>{user.email}</option>
            ))}
          </select>
          <label>Add user four:</label>
          <select
            value={data.userfour}
            id="userfour"
            onChange={(e) => handleChange(e)}
          >
            {users.map((user) => (
              <option name={user.email}>{user.email}</option>
            ))}
          </select>
          <label>Add user five:</label>
          <select
            value={data.userfive}
            id="userfive"
            onChange={(e) => handleChange(e)}
          >
            {users.map((user) => (
              <option name={user.email}>{user.email}</option>
            ))}
          </select>
          <button style={style}> SUBMIT MEMBERS</button>
        </form>
      </div>
    </>
  );
}

export default Addmembers;
