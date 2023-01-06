import Expense from "../models/Expense.js";

// create Expense for a user
export const addExpense = async (req, res) => {
  //console.log(req.user);
  try {
    const newExpense = new Expense({ userId: req.user.id, ...req.body });
    const savedExpense = await newExpense.save();
    res.status(200).json(savedExpense);
  } catch (error) {
    console.log(error);
  }
};

// update Expenses
export const updateExpense = async (req, res) => {
  //console.log(req.body)
  try {
    const id = req.params.id;
    const updatedExpense = await Expense.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedExpense);
  } catch (error) {
    console.log(error);
  }
};

// get all Expenses
export const getExpenses = async (req, res) => {
  try {
    const userId = req.user.id;
    const allExpenses = await Expense.find({ userId });
    res.status(200).json(allExpenses);
  } catch (error) {
    console.log(error);
  }
};

// delete Expense
export const deleteExpense = async (req, res) => {
  try {
    const id = req.params.id;
    await Expense.findByIdAndDelete(id);
    res.status(200).json("Expense deleted successfully.");
  } catch (error) {
    console.log(error);
  }
};
