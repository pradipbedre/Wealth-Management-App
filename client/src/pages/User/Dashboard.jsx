import React from "react";
import "./dashboard.scss";
const Dashboard = () => {
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
            <button>Profile</button>
            <button>Logout</button>
          </div>
        </div>
      </div>
      <div className="dash-main-section">
        <button className="dash-btn">Add Fix Assets</button>
        <button className="dash-btn">Add Income</button>
        <button className="dash-btn">Add Expenses</button>
        <button className="dash-btn">Income Expense Breakdown</button>
      </div>
      <img className="locker-img" src="../../../Assets/user-dash.png" alt="" />
    </div>
  );
};

export default Dashboard;
