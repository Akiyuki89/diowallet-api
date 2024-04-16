import mongoose from "mongoose";
import "dotenv/config";

export async function connectDb() {
  try {
    await mongoose.connect("mongodb+srv://admin:admin@diowallet-cluster.bsiqbqm.mongodb.net/?retryWrites=true&w=majority&appName=diowallet-cluster");
    console.log("MongoDB Atlas connected!");
  } catch (err) {
    console.log(err.message);
  }
}

export async function disconnectDb() {
  await mongoose.disconnect();
}