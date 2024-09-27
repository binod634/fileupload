import express from "express";
import cors from "cors";
import multer from "multer";
import fileuploadController from "./controller/uploadcontroller.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import listingController from "./controller/listingcontroller.js";
const app = express();
const upload = multer({ dest: "./public" });
app.use(cors());
app.use(express.json());

app.post("/upload", upload.single("file"), fileuploadController);
app.get("/listfiles", listingController);
app.use("/public", express.static("public"));

// load env config to process
dotenv.config();

mongoose.connect(process.env.MONGODB_URI);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
