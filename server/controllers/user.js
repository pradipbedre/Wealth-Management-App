import User from "../models/User.js";
import Asset from "../models/Asset.js";
import Income from "../models/Income.js";
import Expense from "../models/Expense.js";

// Update User profile
export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
  }
};

export const getUserDetails = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

// Delete User Account
export const deleteAccount = async (req, res) => {
  console.log("hi");
  try {
    const userId = req.params.id;
    const id = req.user.id;
    await User.findByIdAndDelete(id);
    await Asset.deleteMany({ userId });
    await Expense.deleteMany({ userId });
    await Income.deleteMany({ userId });
    res.status(200).json("Assets, Income, Expense and User deleted.");
  } catch (error) {
    console.log(error);
  }
};
