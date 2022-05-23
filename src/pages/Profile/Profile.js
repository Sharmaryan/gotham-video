import React from "react";
import { useAuth } from "context";
import "./Profile.css";
import { toast } from "react-toastify";
export const Profile = () => {
  const {
    auth: {
      user: { firstName, lastName, email },
    },
    setAuth, auth
  } = useAuth();

  const logout = () => {
    setAuth({ ...auth, user: null, token: "", auth: false });
    toast.warn("Successfully logged out!");
  };

  return (
    <div className="profile">
      <div className="card card-simple">
        <p className="card-title">Your Profile</p>
        <p className="card-desc">
          Name : {firstName} {lastName}
        </p>
        <p className="card-desc">Email : {email}</p>
        <button className="card-btn" onClick={logout}>Logout</button>
      </div>
    </div>
  );
};
