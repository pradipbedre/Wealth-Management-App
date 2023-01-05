import { Outlet, Navigate } from "react-router-dom";
import { getCookie } from "./Cookie";

const PrivateRoutes = () => {
  const isAuth = getCookie("jwt_token");
  return isAuth ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoutes;
