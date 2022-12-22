import express from "express";
const router = express.Router();
import {
  addAsset,
  deleteAsset,
  updateAsset,
  getAssets,
} from "../controllers/asset.js";
import { verifyToken } from "../verifyToken.js";
/* Welcome to Asset CURD */
// Create a new Asset

router.post("/add", verifyToken, addAsset);

// update an Asset
router.put("/update/:id", verifyToken, updateAsset);

// Read all Asset
router.get("/", verifyToken, getAssets);

// delete an Asset
router.delete("/delete/:id", verifyToken, deleteAsset);

export default router;
