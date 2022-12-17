import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  expenseName: {
    type: String,
    required: true,
    value: {
      type: Number,
    },
  },
});

export default mongoose.model("Expense ", expenseSchema);
