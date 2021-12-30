import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const HomePage = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div className="centred_div">
      <h1>Welcome {user ? user.name : null} !!</h1>
    </div>
  );
};

export default HomePage;
