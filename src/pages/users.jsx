import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const UsersPage = () => {
  return (
    <div>
    <Container>
      <ul>
        {["Alex", "John", "Jax", "Henrik", "William"].map((user, idx) => {
          return <li key={idx}>{user}</li>;
        })}
      </ul>
      <Link to="/">Go back Home!</Link>
    </Container>
    </div>
  );
};

export default UsersPage;