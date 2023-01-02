import React from "react";
import "./addexpenses.scss";
import { Link } from "react-router-dom";
const AddExpense = () => {
  return (
    <div className="addExpenseContainer">
      <div className="navbar">
        <Link to="/dashboard">
          <button className="dashboard">Dashboard</button>
        </Link>
        <h2>Add Expense</h2>
      </div>
      <form className="inputForm">
        <input type="text" placeholder="Expense Name" />
        <input type="text" placeholder="Enter amount" />
        <input type="file" />
        <button type="submit">Add</button>
      </form>
      <div className="tableData">
        <table width="1000" height="250">
          <tr className="header">
            <th>Expense Name</th>
            <th>Amount</th>
            <th>File</th>
          </tr>
          <tr className="content">
            <td>Ramesh Raman</td>
            <td>Ramesh Raman</td>
            <td>Ramesh Raman</td>
          </tr>
          <tr className="content">
            <td>Ramesh Raman</td>
            <td>Ramesh Raman</td>
            <td>Ramesh Raman</td>
          </tr>
          <tr className="content">
            <td>Ramesh Raman</td>
            <td>Ramesh Raman</td>
            <td>Ramesh Raman</td>
          </tr>
          <tr className="content">
            <td>Ramesh Raman</td>
            <td>Ramesh Raman</td>
            <td>Ramesh Raman</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default AddExpense;
