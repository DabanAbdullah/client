import React from "react";
import { Outlet } from "react-router-dom";

export const HomeLayout = () => {
  return (
    <div>
      <nav>Navbar</nav>
      <br />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
