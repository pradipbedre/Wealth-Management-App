import React from "react";
import { FcGoogle } from "react-icons/Fc";
import { Link, Route } from "react-router-dom";
import Dashboard from "../../pages/User/Dashboard";
import "./signin.scss";
const Signup = () => {
  return (
    <div>
      <div className="signin-container">
        <div className="left">
          <img src="../../Assets/signup.png" alt="signup" />
        </div>
        <div className="right">
          <h2>Register Now</h2>
          <p>
            or,
            <Link to="/signup"> create a account</Link>
          </p>
          <form action="">
            <label htmlFor="">Email:</label>
            <input type="text" placeholder="email" />
            <label htmlFor="">Password:</label>
            <input type="text" placeholder="password" />
            <button className="signin">Sign In</button>
            <button className="google">
              <FcGoogle />
              signin with google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
