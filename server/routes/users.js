import express from "express";
import { signup, signin} from "../controllers/user.js";
const router = express.Router();

// CREATE A USER
router.post("/signup", signup);

// SIGN IN A USER
router.post("/signin", signin);

/* // UPDATE A USER
router.put("/updateprofile", updateUser);

// DELETE A USER
router.delete("/deleteprofile", deleteUser); */

export default router;
