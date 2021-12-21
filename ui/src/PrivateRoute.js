import React from "react";
import { Redirect, Route } from "react-router-dom";
import Home from "./pages/Home";

function PrivateRoute({
  isAuthenticated: isAuthenticated,
  component: Component,
  ...rest
}) {
  console.log(isAuthenticated);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated) {
          return <Component />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
}

export default PrivateRoute;
