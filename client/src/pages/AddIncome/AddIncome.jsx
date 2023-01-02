import React from "react";
import { Link } from "react-router-dom";
import "./addincome.scss";
const AddIncome = () => {
  return (
    <div className="addIncomeContainer">
      <div className="navbar">
        <Link to="/dashboard">
          <button className="dashboard">Dashboard</button>
        </Link>
        <h2>Add Income</h2>
      </div>
      <form className="inputForm">
        <input type="text" placeholder="income source" />
        <input type="text" placeholder="amount" />
        <button type="submit">Add</button>
      </form>
      <div className="tableData">
        <table width="1000" height="250">
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
          <tr className="content">
            <td>Ramesh Raman</td>
            <td>Ramesh Raman</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default AddIncome;
