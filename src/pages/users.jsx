import React from "react";
import { Link } from "react-router-dom";

const UsersPage = () => {
  return (
    <div>
      <ul>
        {["Alex", "John", "Jax", "Henrik", "William"].map((user, idx) => {
          return <li key={idx}>{user}</li>;
        })}
      </ul>
      <Link to="/">Go back Home!</Link>
    </div>
  );
};

export default UsersPage;