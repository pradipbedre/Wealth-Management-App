import express from "express";
import { updateUser, deleteUser } from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";
const router = express.Router();

// UPDATE A USER
router.put("/updateProfile", verifyToken, updateUser);

// DELETE A USER
router.delete("/deleteAccount", verifyToken, deleteUser);

export default router;
