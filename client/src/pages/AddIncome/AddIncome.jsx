import React from "react";
import { Link } from "react-router-dom";
import "./addincome.scss";
import axios from "axios";
import invalidToken from "../../utils/InvalidToken";
import { useEffect, useState } from "react";

const AddIncome = () => {
  const [income, setIncome] = useState([]);
  const [incomeSource, setIncomeSource] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");

  /* Get All Incomes  */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/income");
        setIncome(res.data);
      } catch (error) {
        invalidToken(error.response.data.Auth);
      }
    };
    fetchData();
  }, [income]);

  /* Delete Income */
  const deleteIncome = async (e, id) => {
    try {
      const res = await axios.delete(`/api/income/delete/${id}`);
      console.log(res);
    } catch (error) {
      console.log(error);
      invalidToken(error.response.data.Auth);
    }
  };

  /* Add Income  */
  const submitIncome = async (e) => {
    //e.preventDefault();
    try {
      const res = await axios.post("/api/income/add", {
        incomeSource,
        incomeAmount,
      });
    } catch (error) {
      invalidToken(error.response.data.Auth);
    }
  };

  return (
    <div className="addIncomeContainer">
      <div className="navbar">
        <Link to="/dashboard">
          <button className="dashboard">Dashboard</button>
        </Link>
        <h2>Add Income</h2>
      </div>
      <form className="inputForm">
        <input
          type="text"
          placeholder="income source"
          value={incomeSource}
          onChange={(e) => setIncomeSource(e.target.value)}
        />
        <input
          type="text"
          placeholder="amount"
          value={incomeAmount}
          onChange={(e) => setIncomeAmount(e.target.value)}
        />
        <button type="submit" onClick={submitIncome}>
          Add
        </button>
      </form>
      <div className="tableData">
        <table width="1000" height="250">
          <thead>
            <tr className="header">
              <th>Income Source</th>
              <th>Amount</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {income &&
              income.map((inc) => (
                <tr className="content" key={inc._id}>
                  <td>{inc.incomeSource}</td>
                  <td>{inc.incomeAmount}</td>
                  <td>
                    <button onClick={(e) => deleteIncome(e, inc._id)}>
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

export default AddIncome;
