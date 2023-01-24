import React from "react";
import "./signup.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import welcome from "../../Assets/welcome.png";
import { Input } from "antd";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();
    if (email === "" || mobile === "" || password === "" || name === "") {
      alert("please enter valid details!");
    } else {
      try {
        const res = await axios.post("/api/auth/signup", {
          name,
          email,
          password,
          mobile,
        });
        if (res.data.user) {
          alert("This email is already register, sign up with another email.");
        } else if (res.status === 200) {
          alert("Your Registration Successfully Compleated.");
          navigate("/signin");
          setEmail("");
          setMobile("");
          setName("");
          setPassword("");
        }
      } catch (error) {
        // console.log(error.response.data.errors[0].param);
        if (error.response.data.errors) {
          alert("Enter valid details!");
        }
      }
    }
  };

  return (
    <div>
      <div className="signup-container">
        <div className="left">
          <img src={welcome} alt="signup" />
        </div>
        <div className="right">
          <h1>Register Now</h1>
          <p>
            or,
            <Link to="/signin"> Login to account</Link>
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
            <label htmlFor="">Mobile No:*</label>
            <input
              type="number"
              placeholder="mobile no"
              pattern="/^\+?[1-9][0-9]{7,14}$/"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <label htmlFor="">Password:*</label>
            <Input.Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="">Enter Name:*</label>
            <input
              type="text"
              placeholder="enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <button className="signup" type="submit" onClick={registerUser}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
