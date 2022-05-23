import React, { useReducer } from "react";
import "./Login.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from "context/auth-context/auth-context";
import { loginReducer } from "reducer/login-reducer";
import { BiShow, BiHide } from "react-icons/bi";
import { toast } from "react-toastify";
export const Login = () => {
  const { auth, setAuth } = useAuth();
  const [{ email, password, passwordType }, dispatch] = useReducer(loginReducer, {
    email: "",
    password: "",
    passwordType:'password'
  });

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`/api/auth/login`, {
        email,
        password,
      });

      const {
        status,
        data: { encodedToken, foundUser },
      } = response;

      if (status >= 200 && status <= 299) {
        setAuth({ ...auth, auth: true, user: foundUser, token: encodedToken });
        localStorage.setItem("token", encodedToken);
        navigate(from, { replace: true });
        toast.success("Successfully logged In");
      }
    } catch (error) {
      
      toast.error('Something went wrong')
    }
  };

  const guestLoginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: "adarshbalika@gmail.com",
        password: "adarshBalika123",
      });

      const {
        status,
        data: { encodedToken, foundUser },
      } = response;

      if (status >= 200 && status <= 299) {
      setAuth({ ...auth, auth: true, user: foundUser, token: encodedToken });
      localStorage.setItem("token", encodedToken);
      navigate(from, { replace: true });
      toast.success("Successfully logged In");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
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
            onChange={(e) =>
              dispatch({ type: "EMAIL", payload: e.target.value })
            }
            value={email}
          />
        </label>
        <label htmlFor="password">
          Password
          <div className="password-input">
            <input
              type={passwordType}
              id="password"
              placeholder="*********"
              className="input"
              onChange={(e) =>
                dispatch({ type: "PASSWORD", payload: e.target.value })
              }
              value={password}
            />
            {passwordType === "password" ? (
              <BiShow
                className="password-icons"
                onClick={() =>
                  dispatch({ type: "PASSWORD_VISIBILITY", payload: "text" })
                }
              />
            ) : (
              <BiHide
                className="password-icons"
                onClick={() =>
                  dispatch({
                    type: "PASSWORD_VISIBILITY",
                    payload: "password",
                  })
                }
              />
            )}
          </div>
        </label>

        <div className="password">
          <label htmlFor="remember">
            <input name="checkbox" id="remember" type="checkbox" />
            Remember Me
          </label>
          <Link to="#" className="text-decorations password-forgot">
            forgot your password?
          </Link>
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
