import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { resetpassword } from "../redux/actions/auth";
import Button from "../components/Button";
function Forgotpassword() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { error, message } = useSelector((state) => state.auth);
  const [errors, setErrors] = useState("");
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmnpassword: "",
  });

  const submit = (e) => {
    e.preventDefault();
    if (data.password !== data.confirmpassword) {
      setErrors("passwords do not match");
    } else {
      dispatch(resetpassword(data));
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    const passwordDetails = { ...data };
    passwordDetails[e.target.id] = e.target.value;
    setData(passwordDetails);
  };
  if (message) {
    history.push("/");
  }
  return (
    <div>
      <p>reset password</p>

      {error && <h4 style={{ color: "red" }}>{error}</h4>}
      {errors && <h4 style={{ color: "red" }}>{errors}</h4>}
      {message && <h4 style={{ color: "green" }}>{message}</h4>}
      <form onSubmit={(e) => submit(e)} className="form">
        <label>First name:</label>
        <input
          type="text"
          value={data.firstname}
          id="firstname"
          placeholder="Enter first name"
          required
          onChange={(e) => handleChange(e)}
        />
        <label>Last name:</label>
        <input
          type="text"
          id="lastname"
          value={data.lastname}
          placeholder="Enter last name"
          required
          onChange={(e) => handleChange(e)}
        />
        <label>email</label>
        <input
          type="text"
          id="email"
          value={data.email}
          placeholder="Enter email"
          required
          onChange={(e) => handleChange(e)}
        />
        <label>New password</label>
        <input
          type="text"
          id="password"
          value={data.password}
          placeholder="Enter new password"
          required
          onChange={(e) => handleChange(e)}
        />
        <label>Confirm new password</label>
        <input
          type="text"
          id="confirmpassword"
          value={data.confirmpassword}
          placeholder="Confirm new password"
          required
          onChange={(e) => handleChange(e)}
        />
        <Button text="Submit details" />
      </form>
    </div>
  );
}

export default Forgotpassword;
