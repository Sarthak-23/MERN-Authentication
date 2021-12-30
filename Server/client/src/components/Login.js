import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Login = () => {
  const [user, setUser] = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        setError("Please Fill the details");
        return;
      }
      // Check if Email is Valid or not
      let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
      const result = await regex.test(email);
      if (result === false) {
        setError("Email is Badly Formatted");
        return;
      }
      // console.log(email,password);
      let res = await fetch("/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      res = await res.json();
      console.log(res);
      if (res._id) {
        setUser(res);
        history("/");
        setError("");
      } else {
        setError(res.message || "Something went wrong");
      }
    } catch (e) {
      console.log(e);
      setError("Something went wrong");
    }
  };

  return (
    <div className="FormBox">
      <h1 style={{ color: "black" }}>Login Form</h1>
      {error ? <p style={{ color: "red" }}>{error}</p> : null}
      <form>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </form>
      <button className="btn_submit" onClick={submitHandler}>
        Login
      </button>
      <Link to="/signup">
        <p style={{ color: "black" }}>Don't have an Account? Sign Up</p>
      </Link>
    </div>
  );
};

export default Login;
