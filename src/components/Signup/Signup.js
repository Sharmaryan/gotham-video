import React, { useReducer } from "react";
import { signupReducer } from "reducer/signup-reducer";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "context/auth-context/auth-context";
import { BiShow, BiHide } from "react-icons/bi";
import axios from "axios";
import "./Signup.css";
import { toast } from "react-toastify";

export const Signup = () => {
  const [{ firstName, lastName, email, password, passwordType }, dispatch] =
    useReducer(signupReducer, {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordType: "password",
    });

  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName,
        lastName,
        email,
        password,
      });
      const {
        status,
        data: { encodedToken, createdUser },
      } = response;

      if (status >= 200 && status <= 299) {
        setAuth({
          ...auth,
          auth: true,
          user: createdUser,
          token: encodedToken,
        });
        localStorage.setItem("token", encodedToken);
        navigate("/");
        toast.success("Successfully logged In");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="signup-section">
      <div className="signup-form">
        <h2 className="signup-form-title">signup</h2>
        <form>
          <label className="label" htmlFor="fname">
            first name
            <input
              onChange={(e) =>
                dispatch({
                  type: "FNAME",
                  payload: e.target.value,
                })
              }
              type="text"
              id="fname"
              placeholder="enter your first name"
              className="input"
              value={firstName}
            />
          </label>
          <label className="label" htmlFor="lname">
            last name
            <input
              onChange={(e) =>
                dispatch({
                  type: "LNAME",
                  payload: e.target.value,
                })
              }
              type="text"
              id="lname"
              placeholder="enter your last name"
              className="input"
              value={lastName}
            />
          </label>
          <label className="label" htmlFor="email">
            Email
            <input
              onChange={(e) =>
                dispatch({
                  type: "EMAIL",
                  payload: e.target.value,
                })
              }
              type="email"
              id="email"
              placeholder="xyz@gmail.com"
              className="input"
              value={email}
            />
          </label>
          <label className="label" htmlFor="password">
            Password
            <div className="password-input">
              <input
                onChange={(e) =>
                  dispatch({
                    type: "PASSWORD",
                    payload: e.target.value,
                  })
                }
                type={passwordType}
                id="password"
                placeholder="*********"
                className="input "
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
