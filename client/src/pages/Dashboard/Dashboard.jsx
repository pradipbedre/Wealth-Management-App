import React from "react";
import "./dashboard.scss";
import { Link } from "react-router-dom";
import { removeCookie } from "../../utils/Cookie";
import dashboard from "../../Assets/user-dash.png";

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
            src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?b=1&s=612x612&w=0&k=20&c=zdMrnElXIALTyT35otBWBGYH23t0zYiwwsg-6rjwnU4="
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
      <img className="locker-img" src={dashboard} alt="" />
    </div>
  );
};

export default Dashboard;
