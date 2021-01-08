const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/connectDB");
const passport = require("passport");
const app = express();
// connect db
dbConnect();

// create route
app.use(express.json());

app.use("/api/audit", require("./routes/audit"));
app.use("/api/anomalie", require("./routes/anomalie"));
app.use("/api/actionCorrective", require("./routes/actionCorrective"));


app.use("/user", require("./routes/user"));

app.use("/api/admin", require("./routes/admin"));



const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log("server is running")
);