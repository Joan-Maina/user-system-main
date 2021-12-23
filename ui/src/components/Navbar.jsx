import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/auth";
import "../styles/Navbar.css";
import { NavLink, useHistory } from "react-router-dom";

function Navbar() {
  const userdata = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    // e.preventDefault();
    console.log("log out");
    dispatch(logout());
    history.push("/");
  };

  const style = {
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    width: "100px",
    border: "none",
    borderRadius: "5px",
  };

  return (
    <>
      <div className="nav">
        <NavLink exact activeClassName="active" to={"/dashboard"}>
          <i className="fa fa-home fa-2x" aria-hidden="true"></i>
        </NavLink>

        <NavLink activeClassName="active" to={"/project"}>
          <h5>Projects</h5>
        </NavLink>
        <NavLink activeClassName="active" to={"/tasks"}>
          <h5>Tasks</h5>
        </NavLink>
        <NavLink activeClassName="active" to={"/user"}>
          <h5>User</h5>
        </NavLink>
        {userdata === null || undefined ? (
          <NavLink to="">
            <button style={style}>Log in</button>
          </NavLink>
        ) : (
          <button style={style} onClick={() => handleLogout()}>
            log out
          </button>
        )}
      </div>
    </>
  );
}

export default Navbar;
