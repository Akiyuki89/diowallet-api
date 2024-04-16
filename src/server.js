import express, { json } from "express";
import authRouter from "./routes/authRoutes.js";
import { connectDb } from "./config/database.js";


const app = express();

app.use(json());

app.use(authRouter);

connectDb();

app.listen(5000, () => {
  console.log("Server listening in port 5000");
});
