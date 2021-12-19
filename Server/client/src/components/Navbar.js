import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink end to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink end to="/profile">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink end to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink end to="/signup">
            Signup
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
