import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/users.js";
import incomeRouter from "./routes/income.js";
const port = process.env.PORT || 3000;
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

mongoose.set("strictQuery", true);
const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};
app.get("/", (req, res) => {
  res.send(`you are live on ${port}`);
});

app.use("/api/auth", userRouter);
app.use("/api/income", incomeRouter);

app.listen(port, () => {
  connect();
  console.log("server is live.......");
});
