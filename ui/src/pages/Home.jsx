import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";
import Navbar from "../components/Navbar";
import { logout } from "../redux/actions/auth";
import "../styles/Home.css";

function Home() {
  const user = JSON.parse(localStorage.getItem("user"));
  const userlevel = user.user.isAdmin;
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
    window.location.reload();
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
                <motion.button
                  className="explore"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2 }}
                >
                  EXPLORE
                </motion.button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="main" id="main">
          <div class="custom-shape-divider-top-1640674066">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <rect x="1200" height="3.6"></rect>
              <rect height="3.6"></rect>
              <path
                d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
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
              <motion.button
                className="explore"
                animate={{ rotate: 360 }}
                transition={{ duration: 2 }}
              >
                CHECK YOUR TASKS
              </motion.button>
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
