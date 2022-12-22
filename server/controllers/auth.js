import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// User Registration 
export const signup = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });

    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    console.log(error);
  }
};

// User Login
export const signin = async (req, res) => {
  //console.log(req);
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("User not found");
    const isCorrectUser = await bcrypt.compare(
      req.body.password,
      user.password
    );

    !isCorrectUser && res.status(400).json("Wrong password");

    // creating jwt sign
    const token = jwt.sign({ id: user._id }, process.env.JWT);
    const { password, ...others } = user._doc;

    // store in cookie
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  } catch (error) {
    console.log(error);
  }
};



