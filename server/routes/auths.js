import express from "express";
import { signup, signin } from "../controllers/auth.js";
const router = express.Router();
import { body } from "express-validator";

// CREATE A USER
router.post(
  "/signup",
  body("email").isEmail(),
  body("password").isLength({ min: 4 }),
  body("mobile").isLength({ min: 10 }),
  signup
);

// SIGN IN A USER
router.post(
  "/signin",
  body("email").isEmail(),
  body("password").isLength({ min: 4 }),
  signin
);

// Signup with google

export default router;
