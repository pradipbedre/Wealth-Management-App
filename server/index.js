import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/users.js";
import authRouter from "./routes/auths.js";
import incomeRouter from "./routes/incomes.js";
import assetsRouter from "./routes/assets.js";
import expensesRouter from "./routes/expenses.js";
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
  return res.send(`you are live on ${port}`);
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/income", incomeRouter);
app.use("/api/asset", assetsRouter);
app.use("/api/expense", expensesRouter);

app.listen(port, () => {
  connect();
  console.log("server is live.......");
});
