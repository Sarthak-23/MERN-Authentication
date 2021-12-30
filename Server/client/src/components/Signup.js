import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Signup = () => {
  const [user, setUser] = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
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
      let res = await fetch("/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, profession, password }),
      });
      res = await res.json();
      if (res._id) {
        setUser(res);
        setError("");
        history("/");
      } else {
        setError(res.message || "Something went wrong");
      }
    } catch (e) {
      console.log(e);
      setError("Something went wrong");
    }
    // console.log(name, email, profession, password);
    // setError("");
  };

  return (
    <div className="FormBox">
      <h1 style={{ color: "black" }}>SignUp Form</h1>
      {error ? <p style={{ color: "red" }}>{error}</p> : null}
      <form>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          name="Professionality"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          placeholder="Your Profession"
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
        Sign Up
      </button>
      <Link to="/login">
        <p style={{ color: "black" }}>Already Have an Account? Log In</p>
      </Link>
    </div>
  );
};

export default Signup;
