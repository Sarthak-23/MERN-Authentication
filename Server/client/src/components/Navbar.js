import React, { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      let res = await fetch("/auth/logout", {
        method: "POST",
      });
      res = await res.json();
      if (!res.success) throw res.error;
      else {
        navigate("/login", { replace: true });
        window.location.reload();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink end to="/">
            Home
          </NavLink>
        </li>
        {user._id ? (
          <li>
            <NavLink end to="/profile">
              Profile
            </NavLink>
          </li>
        ) : null}
        {user._id ? (
          <li>
            <button onClick={handleSubmit} className="logout_button">
              Logout
            </button>
          </li>
        ) : null}
        {user._id ? null : (
          <li>
            <NavLink end to="/login">
              Login
            </NavLink>
          </li>
        )}
        {user._id ? null : (
          <li>
            <NavLink end to="/signup">
              Signup
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
