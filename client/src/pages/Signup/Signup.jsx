import React from "react";
import "./signup.scss";
import { FcGoogle } from "react-icons/Fc";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div>
      <div className="signup-container">
        <div className="left">
          <img src="../../Assets/signup.png" alt="signup" />
        </div>
        <div className="right">
          <h2>Register Now</h2>
          <p>
            or,
            <Link to="/signin"> Login to account</Link>
          </p>
          <form action="">
            <label htmlFor="">Email:</label>
            <input type="text" placeholder="email" />
            <label htmlFor="">Mobile No:</label>
            <input type="text" placeholder="mobile no" />
            <label htmlFor="">Password:</label>
            <input type="text" placeholder="password" />
            <label htmlFor="">Retype password:</label>
            <input type="text" placeholder="retype password" />
            <button className="signup">Sign Up</button>
            <button className="google">
              <FcGoogle />
              signup with google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
