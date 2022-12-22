import mongoose from "mongoose";
const incomeSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    incomeSource: {
      type: String,
      required: true,
    },
    incomeAmount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Income", incomeSchema);
