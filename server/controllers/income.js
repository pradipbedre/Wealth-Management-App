import Income from "../models/Income.js";

// create income for a user
export const addIncome = async (req, res) => {
  //console.log(req.user);
  try {
    const newIncome = new Income({ userId: req.user.id, ...req.body });
    const savedIncome = await newIncome.save();
    res.status(200).json(savedIncome);
  } catch (error) {
    console.log(error);
  }
};

// update incomes
export const updateIncome = async (req, res) => {
  //console.log(req.body)
  try {
    const id = req.params.id;
    const updatedIncome = await Income.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedIncome);
  } catch (error) {
    console.log(error);
  }
};

// get all incomes
export const getIncomes = async (req, res) => {
  try {
    const userId = req.user.id;
    const allIncomes = await Income.find({ userId });
    res.status(200).json(allIncomes);
  } catch (error) {
    console.log(error);
  }
};

// delete income
export const deleteIncome = async (req, res) => {
  try {
    const id = req.params.id;
    await Income.findByIdAndDelete(id);
    res.status(200).json("Income deleted successfully.");
  } catch (error) {
    console.log(error);
  }
};
