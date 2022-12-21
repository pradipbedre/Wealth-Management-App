import Income from "../models/Income.js";
export const addIncome = async (req, res) => {
  //console.log(req.user);
  const newIncome = new Income({ userId: req.user.id, ...req.body });
  const saverdIncome = await newIncome.save();
  res.status(200).json(saverdIncome);
};

export const updateIncome = async (req, res) => {
  console.log(req.body)
  const id = req.params.id;
  const updatedIncome = await Income.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200).json(updatedIncome);
};

export const getIncomes = async (req, res) => {
  const allIncomes = await Income.find();
  res.status(200).json(allIncomes);
};

export const deleteIncome = async (req, res) => {
  const id = req.params.id;
  const deletedIncome = await Income.findByIdAndDelete(id);
  res.status(200).json("Income deleted successfully.");
};
