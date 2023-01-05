import { removeCookie } from "./Cookie";
const invalidToken = (value) => {
  if (!value) {
    removeCookie("jwt_token");
  }
};

export default invalidToken;
