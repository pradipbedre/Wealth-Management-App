import express from "express";
const router = express.Router();
import {
  updateUser,
  deleteAccount,
  getUserDetails,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

// GET User Details
router.get("/userInfo", verifyToken, getUserDetails);

// UPDATE A USER
router.put("/updateProfile/:id", verifyToken, updateUser);

// DELETE A USER
router.delete("/deleteAccount/:id", verifyToken, deleteAccount);

export default router;
