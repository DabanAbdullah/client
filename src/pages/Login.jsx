import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Link to="/register">Register page</Link>
      <a href="https://code.visualstudio.com/docs/editor/intellisense">
        some page
      </a>
    </div>
  );
};

export default Login;
