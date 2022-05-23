export const signupReducer = (state, { type, payload }) => {
  switch (type) {
    case "FNAME":
      return { ...state, firstName: payload };
    case "LNAME":
      return { ...state, lastName: payload };
    case "EMAIL":
      return { ...state, email: payload };
    case "PASSWORD":
      return { ...state, password: payload };
    case "CONFIRM_PASSWORD":
      return { ...state, confirmPassword: payload };
    case "PASSWORD_VISIBILITY":
      return { ...state, passwordType: payload };
    case "CONFIRM_PASSWORD_VISIBILITY":
      return { ...state, confirmPasswordType: payload };
    default:
      return { ...state };
  }
};
