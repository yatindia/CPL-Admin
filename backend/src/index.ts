import express , {Request,Response} from "express";
import cors from "cors"
import dotenv from "dotenv";
import mongoose from "mongoose";
import admin from "./routes/admin"
import multer from "multer";
// import config from "../config";
import {v4 as uuid} from "uuid"
import { response } from "./types/types";
import path from "path"





const app = express();
dotenv.config();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))



const connect = () => {
  try { mongoose.connect(`mongodb+srv://${process.env.MONGO_USERID}:${process.env.MONGO_PASSWORD}@cluster0.segtq.mongodb.net/test`);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};


app.use("/admin", admin)













app.listen(process.env.PORT, () => {
    connect();
    console.log(`Server Running at http://127.0.0.1:${process.env.PORT}`);
  });