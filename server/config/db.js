const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI);
mongoose.connection
  .on("open", () => {
    console.log("Connected to Database");
  })
  .once("error", () => {
    console.log("Database Connection Error");
  });

module.exports = mongoose;
