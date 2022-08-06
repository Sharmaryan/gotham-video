import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { login } from "features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { formChangeHandler } from "utils/formHandler";
import { useToast } from "hooks/useToast";
export const Login = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { user } = useSelector((state) => state.auth);
  const { showToast } = useToast();

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(login(form))
      .unwrap()
      .then(() => showToast("success", "Successfully logged In"))
      .catch(() => showToast("error", "Successfully Went Wrong"));
  };

  const guestLoginHandler = async (e) => {
    e.preventDefault();
    dispatch(
      login({ email: "adarshbalika@gmail.com", password: "adarshBalika123" })
    )
      .unwrap()
      .then(() => showToast("success", "Successfully logged In"))
      .catch(() => showToast("error", "Successfully Went Wrong"));
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  return (
    <div className="login-form">
      <h2 className="login-title">login</h2>
      <form onSubmit={(e) => loginHandler(e, navigate, from)}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            placeholder="xyz@gmail.com"
            className="input"
            onChange={(e) => formChangeHandler(e, form, setForm)}
            value={form.email}
            name="email"
          />
        </label>
        <label htmlFor="password">
          Password
          <div className="password-input">
            <input
              id="password"
              placeholder="*********"
              className="input"
              onChange={(e) => formChangeHandler(e, form, setForm)}
              value={form.password}
              name="password"
            />
          </div>
        </label>

        <div className="password">
          <label htmlFor="remember">
            <input name="checkbox" id="remember" type="checkbox" />
            Remember Me
          </label>
        </div>
        <button className="login-btn" onClick={loginHandler}>
          login
        </button>
        <button className="login-btn" onClick={guestLoginHandler}>
          login with guest credentials
        </button>
        <div className="new-account">
          <Link to="/signup" className="text-decorations account-title">
            create new account
          </Link>
        </div>
      </form>
    </div>
  );
};
