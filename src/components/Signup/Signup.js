import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Signup.css";
import { signUp } from "features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { formChangeHandler } from "utils/formHandler";
import { useToast } from "hooks/useToast";
export const Signup = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { showToast } = useToast();
    const { theme } = useSelector((state) => state.theme);
  const from = location.state?.from?.pathname || "/";
  const { user } = useSelector((state) => state.auth);
  const signupHandler = async (e) => {
    e.preventDefault();
    dispatch(signUp(form))
      .unwrap()
      .then(() => showToast('success',"Successfully logged In"))
      .catch(() => showToast('error',"something went wrong"));
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  return (
    <div className={`signup-section ${theme}`}>
      <div className="signup-form">
        <h2 className="signup-form-title">signup</h2>
        <form>
          <label className="label" htmlFor="fname">
            first name
            <input
              onChange={(e) => formChangeHandler(e, form, setForm)}
              type="text"
              id="fname"
              placeholder="enter your first name"
              className="input"
              value={form.firstName}
              name="firstName"
            />
          </label>
          <label className="label" htmlFor="lname">
            last name
            <input
              onChange={(e) => formChangeHandler(e, form, setForm)}
              type="text"
              id="lname"
              placeholder="enter your last name"
              className="input"
              value={form.lastName}
              name="lastName"
            />
          </label>
          <label className="label" htmlFor="email">
            Email
            <input
              onChange={(e) => formChangeHandler(e, form, setForm)}
              type="email"
              id="email"
              placeholder="xyz@gmail.com"
              className="input"
              value={form.email}
              name="email"
            />
          </label>
          <label className="label" htmlFor="password">
            Password
            <div className="password-input">
              <input
                onChange={(e) => formChangeHandler(e, form, setForm)}
                id="password"
                placeholder="*********"
                className="input "
                value={form.password}
                name="password"
              />
            </div>
          </label>

          <div className="t-and-c">
            <label className="label" htmlFor="t&c">
              <input name="t&c" id="t&c" type="checkbox" />I accept terms and
              condition
            </label>
          </div>
          <button className="signup-btn" onClick={signupHandler}>
            create new account
          </button>
          <div className="have-account">
            <Link to="/login" className="text-decorations account">
              already have an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
