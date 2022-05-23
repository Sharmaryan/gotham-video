import React, { useReducer } from "react";
import "./Login.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from "context/auth-context/auth-context";
import { loginReducer } from "reducer/login-reducer";
import { BiShow, BiHide } from "react-icons/bi";
import { loginHandler, guestLoginHandler } from "services";

export const Login = () => {
  const { auth, setAuth } = useAuth();
  const [{ email, password, passwordType }, dispatch] = useReducer(
    loginReducer,
    {
      email: "",
      password: "",
      passwordType: "password",
    }
  );

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  return (
    <div className="login-form">
      <h2 className="login-title">login</h2>
      <form
        onSubmit={(e) =>
          loginHandler(e, email, password, axios, auth, setAuth, navigate, from)
        }
      >
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
            required
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
              required
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

        <button className="login-btn">login</button>
        <button
          className="login-btn"
          onClick={(e) =>
            guestLoginHandler(e, axios, setAuth, auth, from, navigate)
          }
        >
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
