import React, { useEffect, useState } from "react";
import "../styles/Signup.css";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import { register } from "../redux/actions/auth";

function Signup() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { error, message } = useSelector((state) => state.auth);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
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
            {error && <h4 style={{ color: "red" }}>{error}</h4>}
            {message && <h4 style={{ color: "green" }}>{message}</h4>}
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
            <label>Phone number:</label>
            <input
              id="phone"
              onChange={(e) => handle(e)}
              value={data.phone}
              type="text"
              placeholder="+254..."
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
            <Link to="">
              <p>Already have an account? </p>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
