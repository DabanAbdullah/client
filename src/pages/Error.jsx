import React from "react";
import { Link, useRouteError } from "react-router-dom";

export const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1> Error</h1>
      <p>{err.status}</p>
      <p>{err.data}</p>

      <Link to="/">Back to Home page</Link>
    </div>
  );
};
export default Error;
