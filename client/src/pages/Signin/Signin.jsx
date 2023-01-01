import React from "react";
import { FcGoogle } from "react-icons/Fc";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./signin.scss";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("please enter valid details!");
    } else {
      try {
        const res = await axios.post("/api/auth/signin", {
          email,
          password,
        });
        console.log(res);
        if (res.data.Msg) {
          alert(`${res.data.Msg}`);
        }
        if (res.status === 200) {
          navigate("/dashboard");
        }
      } catch (error) {
        //console.log(error.response.data.errors[0].param);
        if (error.response.data.errors) {
          alert("Enter valid details!");
        }
      }
    }
  };
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
            <label htmlFor="">Email:*</label>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="">Password:*</label>
            <input
              type="text"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="signin" type="submit" onClick={loginUser}>
              Sign In
            </button>
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