import React from "react";
import "./addexpenses.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import invalidToken from "../../utils/InvalidToken";
import { useEffect, useState } from "react";

const AddExpense = () => {
  const [expense, setExpense] = useState([]);
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  /* Get All Incomes  */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/expense");
        setExpense(res.data);
      } catch (error) {
        invalidToken(error.response.data.Auth);
      }
    };
    fetchData();
  }, [expense]);

  /* Delete Income */
  const deleteExpense = async (e, id) => {
    try {
      const res = await axios.delete(`/api/expense/delete/${id}`);
      console.log(res);
    } catch (error) {
      console.log(error);
      invalidToken(error.response.data.Auth);
    }
  };

  /* Add Income  */
  const submitExpense = async (e) => {
    //e.preventDefault();
    try {
      const res = await axios.post("/api/expense/add", {
        expenseName,
        expenseAmount,
      });
    } catch (error) {
      invalidToken(error.response.data.Auth);
    }
  };

  return (
    <div className="addExpenseContainer">
      <div className="navbar">
        <Link to="/dashboard">
          <button className="dashboard">Dashboard</button>
        </Link>
        <h2>Add Expense</h2>
      </div>
      <form className="inputForm">
        <input
          type="text"
          placeholder="Expense Name"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter amount"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
        />

        <button type="submit" onClick={submitExpense}>
          Add
        </button>
      </form>
      <div className="tableData">
        <table width="1000" height="250">
          <thead>
            <tr className="header">
              <th>Expense Name</th>
              <th>Amount</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {expense &&
              expense.map((exp) => (
                <tr className="content" key={exp._id}>
                  <td>{exp.expenseName}</td>
                  <td>{exp.expenseAmount}</td>
                  <td>
                    <button onClick={(e) => deleteExpense(e, exp._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddExpense;
