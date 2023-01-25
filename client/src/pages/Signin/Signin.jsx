import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../utils/Cookie";
import "./signin.scss";
import welcome from "../../Assets/welcome.png";
import { Input } from "antd";

const Signup = () => {
  /* Defile States */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  /* All Functions  */
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
        //console.log(res);
        if (res.data.Msg) {
          alert(`${res.data.Msg}`);
        }
        if (res.status === 200 && res.data.Auth) {
          setCookie("jwt_token", res.data.token);
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
    <div className="signin-container">
      <div className="left">
        <img src={welcome} alt="signup" />
      </div>
      <div className="right">
        <h1>Login</h1>
        <p style={{ fontSize: "14px" }}>
          or,
          <Link to="/signup"> create a account</Link>
        </p>
        <form>
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="">Password</label>
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="signin" type="submit" onClick={loginUser}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
