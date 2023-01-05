import React from "react";
import "./dashboard.scss";
import { Link } from "react-router-dom";
import { removeCookie } from "../../utils/Cookie";

const Dashboard = () => {
  const logoutUser = () => {
    removeCookie("jwt_token");
  };

  return (
    <div className="dash-container">
      <div className="dash-navbar">
        <h2>Welcome To WealthUp</h2>
        <div className="dropdown">
          <img
            className="dash-profile"
            src="https://avatars.githubusercontent.com/u/60803643?s=40&v=4"
            alt="profile-picture"
          />
          <div class="dropdown-content">
            <Link to="/dashboard/profile">
              <button>Profile</button>
            </Link>

            <Link to="/">
              <button onClick={logoutUser}>Logout</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="dash-main-section">
        <Link to="/dashboard/addAsset">
          <button className="dash-btn">Add Fix Assets</button>
        </Link>
        <Link to="/dashboard/addIncome">
          <button className="dash-btn">Add Income</button>
        </Link>
        <Link to="/dashboard/addExpense">
          <button className="dash-btn">Add Expenses</button>
        </Link>
        <Link to="/dashboard/breakdown">
          <button className="dash-btn">Income Expense Breakdown</button>
        </Link>
      </div>
      <img className="locker-img" src="../../../Assets/user-dash.png" alt="" />
    </div>
  );
};

export default Dashboard;
