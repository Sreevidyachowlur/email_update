let mongoose = require("../db");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userId: {
    type: Number,
    required: true,
  },
  name: {
    type: "string",
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
