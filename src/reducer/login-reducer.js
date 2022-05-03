export const loginReducer = (state, { type, payload }) => {
  switch (type) {
    case "EMAIL":
      return { ...state, email: payload };
    case "PASSWORD":
      return { ...state, password: payload };
    case "PASSWORD_VISIBILITY":
      return { ...state, passwordType: payload };
    default:
      return { ...state };
  }
};
