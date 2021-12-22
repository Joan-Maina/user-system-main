import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  return (
    <>
      <Navbar />

      {user === null || undefined ? (
        <h2 style={{ margin: "25% 25%", color: "black" }}>
          You are not logged in
        </h2>
      ) : (
        <h2 style={{ margin: "25% 25%", color: "black" }}>
          Welcome back {user.user.firstname}
        </h2>
      )}
    </>
  );
}

export default Home;
