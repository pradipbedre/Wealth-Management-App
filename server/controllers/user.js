import User from "../models/User.js";

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

// Delete User Account
export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    res.status(200).json("Income deleted successfully.");
  } catch (error) {
    console.log(error);
  }
};
