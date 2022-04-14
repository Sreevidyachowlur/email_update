const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/email", () => {
  console.log("connected to database successfully..");
});

module.exports = mongoose;
