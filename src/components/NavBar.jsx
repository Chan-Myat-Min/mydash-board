import React from "react";
import Dashboard from "./Dashboard";
import Products from "./Products";

const NavBar = () => {
  return (
    <div>
      <Dashboard />
      <Products />
      <div>this is the login page</div>
    </div>
  );
};

export default NavBar;
