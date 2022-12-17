import express from "express";
import { signup, signin } from "../controllers/user.js";
const router = express.Router();

// CREATE A USER
router.post("/signup", signup);

// SIGN IN A USER
router.post("/signin", signin);


export default router;
