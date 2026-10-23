require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./src/Database/mongodb");

const PORT = process.env.PORT || 8000

const app = express();

connectDB();
app.use(cors());
app.use(express.json());

app.use("/", (req, res) => {
    res.send("A Server is Running on PORT: 8000")
})

app.use("/health", (req, res) => {
    res.send("A Server Health is Good")
})

app.listen(PORT, (req, res) => {
    console.log(`A Server is running on PORT ${PORT}`)
})