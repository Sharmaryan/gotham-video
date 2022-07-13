import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { login } from "features/authSlice";
// import { BiShow, BiHide } from "react-icons/bi";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { formChangeHandler } from "utils/formHandler";
export const Login = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { user } = useSelector((state) => state.auth);


  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(login(form))
      .unwrap()
      .then(() => toast.success("Successfully logged In"))
      .catch(() => toast.error("something went wrong"));
  };

  const guestLoginHandler = async (e) => {
    e.preventDefault();
    dispatch(
      login({ email: "adarshbalika@gmail.com", password: "adarshBalika123" })
    )
      .unwrap()
      .then(() => toast.success("Successfully logged In"))
      .catch(() => toast.error("something went wrong"));
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  return (
    <div className="login-form">
      <h2 className="login-title">login</h2>
      <form>
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
