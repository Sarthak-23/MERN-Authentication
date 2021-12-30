import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const UserProfile = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div className="centred_div">
      <div className="column">
        <div className="row">
          <h3>Name</h3>
          <p>{user.name}</p>
        </div>
        <div className="row">
          <h3>Email</h3>
          <p>{user.email}</p>
        </div>
        <div className="row">
          <h3>Profession</h3>
          <p>{user.profession}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
