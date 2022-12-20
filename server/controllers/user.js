import Wealth from "../modules/Wealth.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new Wealth({ ...req.body, password: hash });

    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    console.log(error);
  }
};

export const signin = async (req, res) => {
  try {
    const user = await Wealth.findOne({ name: req.body.name });
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
