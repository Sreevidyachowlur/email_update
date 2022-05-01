const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/User", (err, db) => {
  console.log("connected to database successfully..");
  if (err) throw err;
});

module.exports = mongoose;
