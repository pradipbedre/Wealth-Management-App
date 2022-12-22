import mongoose from "mongoose";
const assetSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
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
  { timestamps: true }
);

export default mongoose.model("Asset", assetSchema);
