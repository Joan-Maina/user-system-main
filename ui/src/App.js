import React from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import PrivateRoute from "./PrivateRoute";
import { useSelector } from "react-redux";
import Project from "./pages/Project";
import Addproject from "./pages/Addproject";
import Tasks from "./pages/Tasks";
import Addtask from "./pages/Addtask";
import Projecttasks from "./pages/Projecttasks";
import Users from "./pages/Users";
function App() {
  // const { user } = JSON.parse(localStorage.getItem("user"));
  // console.log(user);
  return (
    <Router>
      <div className="App">
        <Switch className="App">
          <Route className="path" exact path="/" component={Login} />

          <Route className="path" exact path="/dashboard" component={Home} />
          <Route className="path" exact path="/signup" component={Signup} />

          <Route
            className="path"
            exact
            path="/addproject"
            component={Addproject}
          />

          {/* <PrivateRoute
            className="path"
            exact
            path="/addproject"
            component={Addproject}
          /> */}
          {/* <Route className="path" exact path="/home" component={Home} />
          <Route className="path" exact path="/login" component={Login} />
          <Route
            className="path"
            exact
            path="/addproject"
            component={Addproject}
          />
          {Object.values(user).length && (
            <Route className="path" exact path="/project" component={Project} />
          )}
          <Route className="path" exact path="/signup" component={Signup} /> */}

          <Route className="path" exact path="/tasks" component={Tasks} />
          <Route className="path" exact path="/addtask" component={Addtask} />
          <Route
            className="path"
            exact
            path="/projecttasks"
            component={Projecttasks}
          />
          <Route className="path" exact path="/project" component={Project} />
          {/* )} */}
          <Route className="path" exact path="/user" component={Users} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
