import express from "express";
import { signup, signin } from "../controllers/auth.js";
const router = express.Router();

// CREATE A USER
router.post("/signup", signup);

// SIGN IN A USER
router.post("/signin", signin);

// Signup with google

export default router;
