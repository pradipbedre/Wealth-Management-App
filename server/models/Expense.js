import mongoose from "mongoose";
const expenseSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    expenseName: {
      type: String,
      required: true,
    },
    expenseAmount: {
      type: Number,
      required: true,
    },
  },

  { timestamps: true }
);

export default mongoose.model("Expense", expenseSchema);
