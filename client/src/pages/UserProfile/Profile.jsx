import React from "react";
import "./profile.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import invalidToken from "../../utils/InvalidToken";

const Profile = () => {
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const res = await axios.get("/api/user/userInfo");

        setUser(res.data);
      } catch (error) {
        invalidToken(error.response.data.Auth);
      }
    };
    fetchAssets();
  }, []);
  console.log("sssssssssss", user._id);
  const updateProfile = async () => {
    try {
      const res = await axios.put(`/api/user/updateProfile/${user._id}`, {
        name,
        mobile,
        address,
      });
      console.log("profile updated", res);
    } catch (error) {
      invalidToken(error.response.data.Auth);
    }
  };

  const logoutUser = () => {
    removeCookie("jwt_token");
  };
  return (
    <div>
      <div className="profile-container">
        <div className="profile-navbar">
          <h2>Your Profile</h2>
          <div className="dropdown">
            <img
              className="dash-profile"
              src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?b=1&s=612x612&w=0&k=20&c=zdMrnElXIALTyT35otBWBGYH23t0zYiwwsg-6rjwnU4="
              alt="profile-picture"
            />
            <div class="dropdown-content">
              <Link to="/dashboard">
                <button>Dashboard</button>
              </Link>
              <Link to="/">
                <button onClick={logoutUser}>Logout</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="profile">
          <div className="left">
            <h2>Profile Information </h2>
            <h3>Name:- {user.name}</h3>
            <h3>Email:- {user.email}</h3>
            <h3>Mobile No:- {user.mobile}</h3>
            <h3>Address:- {user.address}</h3>
          </div>

          {/*   <div className="left">
            <img
              className="profile-img"
              src="https://avatars.githubusercontent.com/u/60803643?s=40&v=4"
              alt="profile-picture"
            />
            <div className="name-file">
              <p>Pradip Bedre</p>
              <input type="file" />
            </div>
          </div> */}
          <div className="right">
            <label htmlFor="">Name:</label>
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="">Mobile No:</label>
            <input
              type="text"
              placeholder="mobile no"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <label htmlFor="">Address:</label>
            <textarea
              rows="5"
              cols="60"
              name="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button onClick={updateProfile}>Update Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
