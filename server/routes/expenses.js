import express from "express";
const router = express.Router();
import {
  addExpense,
  deleteExpense,
  updateExpense,
  getExpenses,
} from "../controllers/expense.js";
import { verifyToken } from "../verifyToken.js";
/* Welcome to Expense CURD */
// Create a new Expense

router.post("/add", verifyToken, addExpense);

// update an Expense
router.put("/update/:id", verifyToken, updateExpense);

// Read all Expenses
router.get("/", verifyToken, getExpenses);

// delete an Expense
router.delete("/delete/:id", verifyToken, deleteExpense);

export default router;
