import React from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <Link to="/login">Login page</Link>
    </div>
  );
};

export default Register;