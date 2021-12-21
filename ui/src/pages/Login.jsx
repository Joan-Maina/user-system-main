import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../styles/Login.css";
import Button from "../components/Button";
import { login, logout } from "../redux/actions/auth";

function Login() {
  const state = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const history = useHistory();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(login(data));
    setLoading(false);
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
        <div className="frontground">
          <div className="photo">
            <img
              className="loginImage"
              src="https://media.istockphoto.com/photos/you-can-log-into-your-account-worldwide-picture-id501550413"
            />
          </div>

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
          </form>
          {Object.values(state.user).length ? (
            history.push("/project")
          ) : (
            <h2>{state.error}.</h2>
          )}
        </div>
      </div>
    </>
  );
}

export default Login;
