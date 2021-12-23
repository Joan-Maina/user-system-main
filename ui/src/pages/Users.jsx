import React from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { deleteUser, getallusers } from "../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";

function Users() {
  const dispatch = useDispatch();
  const { user } = JSON.parse(localStorage.getItem("user"));
  const { users } = useSelector((state) => state.auth);
  const handleDelete = ({ user }) => {
    console.log(user);
    dispatch(deleteUser(user));
    window.location.reload();
  };
  useEffect(() => {
    dispatch(getallusers());
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      {user.isAdmin ? (
        <>
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First name</th>
                <th scope="col"> Last name</th>
                <th scope="col">Email</th>
                <th scope="col">Delete</th>
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
                    <td>
                      <i
                        class="fa fa-trash"
                        aria-hidden="true"
                        onClick={() => handleDelete({ user: user.email })}
                      ></i>
                    </td>
                  </tr>
                ))
              ) : (
                <td>No users</td>
              )}
            </tbody>
          </table>
        </>
      ) : (
        <>
          <h1>{user.firstname}</h1>
          <h1>{user.lastname}</h1>

          <h1>{user.email}</h1>
        </>
      )}
    </div>
  );
}

export default Users;
