require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connection.on(
  "error",
  console.error.bind(console, "Connection Error")
);

mongoose.connection.on("open", () => {
  console.log("Connected To DB");
});

const config = () => {
  const db = mongoose.connect(process.env.DB);
  return db;
};

module.exports = { config };
