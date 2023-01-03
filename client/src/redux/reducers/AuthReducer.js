let initialState = false;
import Cookies from "js-cookie";

export const checkAuth = (state = initialState, action) => {
  switch (action.type) {
    case "VALID":
      return true;

    case "NOTVALID":
      return false;

    case "LOGOUT":
      Cookies.remove("access_token");
      return false;

    default:
      return state;
  }
};
