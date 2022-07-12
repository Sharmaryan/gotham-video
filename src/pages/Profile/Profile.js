import React from "react";

import "./Profile.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "features/authSlice";
export const Profile = () => {
  const {user} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(userLogout());
    toast.warn("Successfully logged out!");
  };

  return (
    <div className="profile">
      <div className="card card-simple">
        <p className="card-title">Your Profile</p>
        <p className="card-desc">
          Name : {user.firstName} {user.lastName}
        </p>
        <p className="card-desc">Email : {user.email}</p>
        <button className="card-btn" onClick={logout}>Logout</button>
      </div>
    </div>
  );
};
