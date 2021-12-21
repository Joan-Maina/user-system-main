import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Signup.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import { register } from "../redux/actions/auth";

function Signup() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state);

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handle = (e) => {
    const newDetails = { ...data };
    newDetails[e.target.id] = e.target.value;
    setData(newDetails);
  };
  //useeffect
  const submit = async (e) => {
    e.preventDefault();
    dispatch(register(data));
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

          <form className="signupform" onSubmit={(e) => submit(e)}>
            <h3>SIGN UP</h3>
            <label>Firstname</label>
            <input
              id="firstname"
              onChange={(e) => handle(e)}
              value={data.firstname}
              type="text"
              placeholder="enter first name"
              required
            />
            <label>Lastname</label>
            <input
              id="lastname"
              onChange={(e) => handle(e)}
              value={data.lastname}
              type="text"
              placeholder="enter last name"
              required
            />
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
            <label>Confirm password</label>
            <input
              id="confirmpassword"
              onChange={(e) => handle(e)}
              value={data.confirmpassword}
              type="text"
              placeholder="confirm password"
              required
            />
            <Button text="SIGN UP" style={style} />
            <Link to="login">
              <p>Already have an account? </p>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
