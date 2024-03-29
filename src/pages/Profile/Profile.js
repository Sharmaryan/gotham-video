import React from "react";
import "./Profile.css";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "features/authSlice";
import { useTitle } from "hooks/useTitle";
import { useToast } from "hooks/useToast";

export const Profile = () => {
  const {user} = useSelector((state) => state.auth);
  const {theme} = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const { showToast } = useToast();
  useTitle("Profile | Clipz");

  const logout = () => {
    dispatch(userLogout());
    showToast('warn',"Successfully logged out!");
  };

  return (
    <div className={`profile ${theme}`}>
      <div className={`card card-simple ${theme}`}>
        <p className="profile-desc">Your Profile</p>
        <p className="profile-desc">
          Name : {user.firstName} {user.lastName}
        </p>
        <p className="profile-desc">Email : {user.email}</p>
        <button className="card-btn profile-logout" onClick={logout}>Logout</button>
      </div>
    </div>
  );
};
