export const Login = () => {
  return {
    type: "VALID",
  };
};

export const notValidUser = () => {
  return {
    type: "NOTVALID",
  };
};

export const Logout = () => {
  return {
    type: "LOGOUT",
  };
};
