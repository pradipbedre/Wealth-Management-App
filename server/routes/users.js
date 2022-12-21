import express from "express";
import { updateUser, deleteAccount } from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";
const router = express.Router();

// UPDATE A USER
router.put("/updateProfile/:id", verifyToken, updateUser);

// DELETE A USER
router.delete("/deleteAccount/:id", verifyToken, deleteAccount);

export default router;
