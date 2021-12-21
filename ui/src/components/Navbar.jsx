import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/auth";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  const userdata = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();

  const loggingOut = (e) => {
    e.preventDefault();
    console.log("log out");
    dispatch(logout());
  };

  return (
    <>
      <div className="nav">
        <NavLink exact activeClassName="active" to={"/"}>
          {" "}
          <i className="fa fa-home fa-2x" aria-hidden="true"></i>
        </NavLink>

        <NavLink activeClassName="active" to={"/project"}>
          <h5>Projects</h5>
        </NavLink>
        <NavLink activeClassName="active" to={"/tasks"}>
          <h5>Tasks</h5>
        </NavLink>
        <NavLink activeClassName="active" to={"/user"}>
          <h5>Users</h5>
        </NavLink>
        {userdata === null || undefined ? (
          <NavLink to="login">
            <button>Log in</button>
          </NavLink>
        ) : (
          <Button text={"Log out"} onClick={() => dispatch(logout())} />
        )}
      </div>
    </>
  );
}

export default Navbar;
