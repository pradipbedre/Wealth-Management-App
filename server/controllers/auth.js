import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

// User Registration
export const signup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    try {
      //console.log(req.body);
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        res.status(200).json({
          user: "true",
        });
      } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({ ...req.body, password: hash });
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
      }
    } catch (error) {
      console.log(error);
    }
  }
};

// User Login
export const signin = async (req, res) => {
  //console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    try {
      const user = await User.findOne({ email: req.body.email });
      !user &&
        res.status(202).json({
          Msg: "User Not Found",
        });
      const isCorrectUser = await bcrypt.compare(
        req.body.password,
        user.password
      );

      !isCorrectUser &&
        res.status(202).json({
          Msg: "Wrong Password",
        });

      // creating jwt sign
      const token = jwt.sign({ id: user._id }, process.env.JWT, {
        expiresIn: "1d",
      });
      const { password, ...others } = user._doc;

      // store in cookie
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json({ Auth: true, token, ...others });
    } catch (error) {
      console.log(error);
    }
  }
};
