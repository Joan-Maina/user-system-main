import React from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { getallusers } from "../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";

function Users() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.auth);
  console.log(users);
  useEffect(() => {
    dispatch(getallusers());
  }, [dispatch]);
  return (
    <div>
      <Navbar />

      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Task title</th>

            <th scope="col"> Project</th>
            <th scope="col">Start</th>
            <th scope="col">End</th>
            <th scope="col">Delete</th>
            <th scope="col">Assign</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.userId}>
                <th scope="row">{user.userId}</th>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>

                {/* <td>
                  <i
                    class="fa fa-trash"
                    aria-hidden="true"
                    onClick={() => handleDelete({ taskId: task.taskId })}
                  ></i>
                </td> */}
              </tr>
            ))
          ) : (
            <td>No tasks</td>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
