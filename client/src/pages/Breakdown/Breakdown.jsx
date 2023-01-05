import React from "react";
import { Link } from "react-router-dom";
import "./breakdown.scss";
import axios from "axios";
import invalidToken from "../../utils/InvalidToken";
import { useEffect, useState } from "react";
const Breakdown = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [breakI, setBreakI] = useState("");
  const [breakE, setBreakE] = useState("");
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  /* Get All Incomes  */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resIncome = await axios.get("/api/income");
        const resExpense = await axios.get("/api/expense");
        setBreakI(resIncome.data);
        setBreakE(resExpense.data);

        let totalIncomeCalc = 0;
        let totalExpenseCalc = 0;

        resIncome.data.map((e) => {
          totalIncomeCalc += e.incomeAmount;
        });
        setTotalIncome(totalIncomeCalc);

        resExpense.data.map((e) => {
          totalExpenseCalc += e.expenseAmount;
        });
        setTotalExpense(totalExpenseCalc);

      } catch (error) {
        invalidToken(error.response.data.Auth);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="addBreakdownContainer">
      <div className="navbar">
        <Link to="/dashboard">
          <button className="dashboard">Dashboard</button>
        </Link>
        <h2>Income Expense Breakdown</h2>
      </div>
     {/*  <form className="inputForm">
        <input
          type="date"
          placeholder="start date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          placeholder="end date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button type="submit">Result</button>
      </form> */}
      <div className="tableData">
        <table width="400" height="250">
          <thead>
            <tr className="header">
              <th>Expense Name</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {breakE &&
              breakE.map((e) => (
                <tr className="content" key={e._id}>
                  <td>{e.expenseName}</td>
                  <td>{e.expenseAmount}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <table width="400" height="250">
          <thead>
            <tr className="header">
              <th>Income Source</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            {breakI &&
              breakI.map((e) => (
                <tr className="content" key={e._id}>
                  <td>{e.incomeSource}</td>
                  <td>{e.incomeAmount}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="result">
        <div>
          <h2>{`${startDate} To ${endDate}`}</h2>
          <h3>Total Expense</h3>
          <h4>{totalExpense}</h4>
          <h3>Total Income</h3>
          <h4>{totalIncome}</h4>
        </div>
      </div>
    </div>
  );
};

export default Breakdown;
