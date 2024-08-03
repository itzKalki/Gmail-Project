// import express from "express";
// const express = require("express");
import express from "express"
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
dotenv.config({})
connectDB();
const app = express()
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
