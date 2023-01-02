import React from "react";
import { Link } from "react-router-dom";
import "./breakdown.scss";
const Breakdown = () => {
  return (
    <div className="addBreakdownContainer">
      <div className="navbar">
        <Link to="/dashboard">
          <button className="dashboard">Dashboard</button>
        </Link>
        <h2>Income Expense Breakdown</h2>
      </div>
      <form className="inputForm">
        <input type="date" placeholder="start date" />
        <input type="date" placeholder="end date" />
        <button type="submit">Result</button>
      </form>
      <div className="tableData">
        <table width="400" height="250">
          <tr className="header">
            <th>Expense Name</th>
            <th>Amount</th>
          </tr>
          <tr className="content">
            <td>Ramesh Raman</td>
            <td>Ramesh Raman</td>
          </tr>
          <tr className="content">
            <td>Ramesh Raman</td>
            <td>Ramesh Raman</td>
          </tr>
          <tr className="content">
            <td>Ramesh Raman</td>
            <td>Ramesh Raman</td>
          </tr>
        </table>
        <table width="400" height="250">
          <tr className="header">
            <th>Income Source</th>
            <th>Amount</th>
          </tr>
          <tr className="content">
            <td>Ramesh Raman</td>
            <td>Ramesh Raman</td>
          </tr>
          <tr className="content">
            <td>Ramesh Raman</td>
            <td>Ramesh Raman</td>
          </tr>
          <tr className="content">
            <td>Ramesh Raman</td>
            <td>Ramesh Raman</td>
          </tr>
        </table>
      </div>
      <div className="result">
        <div>
          <h2>10/12/2022 to 10/12/2023</h2>
          <h3>Total Expense</h3>
          <h4>20000</h4>
          <h3>Total Income</h3>
          <h4>30000</h4>
        </div>
      </div>
    </div>
  );
};

export default Breakdown;
