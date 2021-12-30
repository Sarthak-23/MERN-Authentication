import { useContext, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";

import "./App.css";
//components

import HomePage from "./components/HomePage";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import { UserContext, UserProvider } from "./Context/UserContext";

function Routesfun() {
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUser = async () => {
      let res = await fetch("/auth/user");
      res = await res.json();
      return res;
    };
    fetchUser().then((res) => {
      if (!res.error) {
        setUser(() => {
          return {
            ...res,
            id: res.id,
          };
        });
        navigate("/");
      }
    });
  }, []);
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route
        exact
        path="/profile"
        element={user && user._id ? <UserProfile /> : <Navigate to="/login" />}
      />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
    </Routes>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <Routesfun />
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
