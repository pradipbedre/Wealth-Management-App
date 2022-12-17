import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/users.js";
const port = process.env.PORT || 8800;
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());

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

app.listen(port, () => {
  connect();
  console.log("server is live.......");
});
