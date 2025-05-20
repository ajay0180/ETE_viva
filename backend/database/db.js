const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("Database connected successfully.");
  } catch {
    console.log("Error in connecting with the database.");
  }
};

module.exports = connectDB;
