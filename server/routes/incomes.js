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

router.post("/addIncome", verifyToken, addIncome);

// update an income
router.put("/updateIncome/:id", verifyToken, updateIncome);

// Read all incomes
router.get("/", verifyToken, getIncomes);

// delete an income
router.delete("/deleteIncome/:id", verifyToken, deleteIncome);

export default router;
