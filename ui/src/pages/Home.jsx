import React from "react";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { logout } from "../redux/actions/auth";
import { Link, useHistory } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const user = JSON.parse(localStorage.getItem("user"));
  const userlevel = user.user.isAdmin;
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  };
  return (
    <>
      {userlevel ? (
        <>
          <Navbar />
          <div className="main">
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="dashboard image"
                className="dashboardimage"
                id="admindashboardimage"
              />
            </div>
            <div className="description">
              <h1 className="welcome">Welcome {user.user.firstname};</h1>
              <h4>Where work happens.</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                sollicitudin finibus mauris. Duis in ex felis. Donec finibus eu
                arcu nec laoreet. Cras viverra diam dui, sed vehicula urna
                facilisis nec. Donec id consectetur enim. Nunc dapibus risus
                ligula, sed eleifend sapien tincidunt nec. Vivamus quis dictum
                lacus, convallis ornare ligula. Donec blandit maximus erat, sed
                fringilla eros gravida eget.
              </p>
              <Link to="project">
                <button className="explore">EXPLORE</button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="main" id="main">
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="dashboard image"
              className="dashboardimage"
              id="admindashboardimage"
            />
          </div>
          <div className="description">
            <h1 className="welcome">Welcome {user.user.firstname};</h1>

            <h4>Where work happens.</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              sollicitudin finibus mauris. Duis in ex felis. Donec finibus eu
              arcu nec laoreet. Cras viverra diam dui, sed vehicula urna
              facilisis nec. Donec id consectetur enim. Nunc dapibus risus
              ligula, sed eleifend sapien tincidunt nec. Vivamus quis dictum
              lacus, convallis ornare ligula. Donec blandit maximus erat, sed
              fringilla eros gravida eget.
            </p>
            <Link to="tasks">
              <button className="explore">CHECK YOUR TASKS</button>
            </Link>
            <button
              className="logout"
              id="logoutuser"
              onClick={() => handleLogout()}
            >
              log out
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
