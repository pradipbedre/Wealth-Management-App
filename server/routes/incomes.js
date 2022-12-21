import express from "express";
const router = express.Router();
import {
  addIncome,
  deleteIncome,
  updateIncome,
  getIncomes,
} from "../controllers/income.js";
import { verifyToken } from "../verifyToken.js";
/* Welcome to income CURD */
// Create a new income

router.post("/add", verifyToken, addIncome);

// update an income
router.put("/update/:id", verifyToken, updateIncome);

// Read all incomes
router.get("/", verifyToken, getIncomes);

// delete an income
router.delete("/delete/:id", verifyToken, deleteIncome);

export default router;
