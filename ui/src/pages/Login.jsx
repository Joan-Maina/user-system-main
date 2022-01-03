import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { login } from "../redux/actions/auth";
import "../styles/Login.css";
import Button from "../components/Button";

function Login() {
  const { user, error } = useSelector((state) => state.auth);
  const token = JSON.parse(localStorage.getItem("user"));
  console.log(token);
  const dispatch = useDispatch();
  const history = useHistory();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const submit = async (e) => {
    e.preventDefault();
    dispatch(login(data));
  };
  const handle = (e) => {
    const loginDetails = { ...data };
    loginDetails[e.target.id] = e.target.value;
    setData(loginDetails);
  };
  const style = {
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    width: "100px",
    marginTop: "10px",
    marginLeft: "50px",
    border: "none",
    borderRadius: "5px",
  };

  return (
    <>
      <div className="main">
        <motion.div
          className="frontground"
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 2 }}
        >
          <div className="photo">
            <img
              className="loginImage"
              src="https://media.istockphoto.com/photos/you-can-log-into-your-account-worldwide-picture-id501550413"
              alt="login image"
            />
          </div>
          <div className="form">
            <form className="form" onSubmit={(e) => submit(e)}>
              <h3>LOGIN</h3>
              <label>Email</label>
              <input
                id="email"
                onChange={(e) => handle(e)}
                value={data.email}
                type="text"
                placeholder="enter email"
                required
              />
              <label>Password</label>
              <input
                id="password"
                onChange={(e) => handle(e)}
                value={data.password}
                type="text"
                placeholder="enter password"
                required
              />

              <Button text="LOGIN" style={style} />

              <Link to="signup">
                <p>Don't have an account? </p>
              </Link>
              <Link to="password">
                <p>Forgot password? </p>
              </Link>
            </form>
            {Object.values(user).length ? (
              history.push("/dashboard")
            ) : (
              <h2>{error}.</h2>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Login;
