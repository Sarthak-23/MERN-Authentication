import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components

import HomePage from "./components/HomePage";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/profile" element={<UserProfile />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
