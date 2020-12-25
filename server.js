const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/connectDB");
const app = express();
// connect db
dbConnect();

// create route
app.use(express.json());
app.use("/api/audit", require("./routes/audit"));


app.use("/api/anomalie", require("./routes/anomalie"));



const PORT = process.env.PORT;
app.listen(5000, (err) =>
  err ? console.error(err) : console.log("server is running")
);