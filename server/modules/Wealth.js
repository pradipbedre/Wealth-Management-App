import mongoose from "mongoose";

const wealthSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  cash: {
    type: Number,
    required: true,
  },
  fd: {
    fdName: String,
    fdAmount: {
      type: Number,
    },
  },
  equity: {
    company: {
      name: String,
      shares: {
        type: Number,
      },
    },
  },
  reaalEstate: {
    estateName: String,
    squareFeet: {
      type: double,
    },
  },
  land: {
    landName: String,
    squareFeet: {
      type: double,
    },
  },
});

export default mongoose.model("Wealth", wealthSchema);
