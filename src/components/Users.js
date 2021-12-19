import React, { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState();
  const [mode, setMode] = useState("online");

  useEffect(() => {
    setMode("online");
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        localStorage.setItem("users", JSON.stringify(data));
      })
      .catch((err) => {
        let collection = localStorage.getItem("users");
        let data = JSON.parse(collection);
        setUsers(data);
        setMode("offline");
      });
  }, []);

  if (!users) {
    return <div className=" text-center m-auto">Loading...</div>;
  }

  return (
    <div>
      {mode === "offline" && !navigator.onLine && (
        <div className=" alert alert-danger">You are offline!</div>
      )}
      <div>
        <ul>
          {users.map((user) => (
            <li id={user.id} key={user.id} className="my-3 list-unstyled">
              <div>Name : {user.name}</div>
              <span>Email : {user.email}</span>
              <div>Mobile No. : {user.phone}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
