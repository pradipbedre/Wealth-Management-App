import mongoose from "mongoose";

const wealthSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "user",
    },
    /* Assets Schema  */
    assets: [
      {
        assetName: {
          type: String,
          required: true,
        },
        assetValue: {
          type: Number,
          required: true,
        },
        additionalDetails: {
          type: String,
        },
        unit: {
          type: String,
          require: true,
        },
      },
    ],
    /* Income Schema  */
    income: [
      {
        incomeSource: {
          type: String,
          required: true,
        },
        incomeAmount: {
          type: Number,
          required: true,
        },
      },
    ],
    /* Expense Schema  */
    expense: [
      {
        expenseName: {
          type: String,
          required: true,
        },
        expenseAmount: {
          type: Number,
          required: true,
        },
        billFile: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Wealth", wealthSchema);
