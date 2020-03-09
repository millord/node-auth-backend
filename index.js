const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

//MIDDLEWARES
app.use(express.json());

// IMPORTING ROUTES
const authRoutes = require("./routes/auth");

/// ROUTES MIDDLEWARES
app.use("/api/user", authRoutes);

// STARTING THE SERVER
port = process.env | 8000;
app.listen(port, () => console.log(`Server up and running on port ${port}`));
// DB CONNECTION
mongoose.connect(
  process.env.DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  console.log("DB conneted")
);
