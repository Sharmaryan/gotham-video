import { toast } from "react-toastify";
const signupHandler = async (
  e,
  axios,
  password,
  confirmPassword,
  firstName,
  lastName,
  email, auth, setAuth, navigate
) => {
  e.preventDefault();
  if (password !== confirmPassword) {
    toast.error("Passwords did not matched");
  } else {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
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
  }
};

  const loginHandler = async (e, email, password, axios, auth, setAuth, navigate, from) => {
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
      toast.error("Something went wrong");
    }
  };

  const guestLoginHandler = async (e, axios, setAuth, auth, from, navigate) => {
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


export { signupHandler, loginHandler, guestLoginHandler };
