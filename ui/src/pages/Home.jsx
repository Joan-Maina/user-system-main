import React from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

function Home() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  return (
    <>
      <Navbar />

      {user === null || undefined ? (
        <h2 style={{ margin: "25% 25%" }}>You are not logged in</h2>
      ) : (
        <h2 style={{ margin: "25% 25%" }}>
          Welcome back {user.user.firstname}
        </h2>
      )}
    </>
  );
}

export default Home;
