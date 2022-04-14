let mongoose = require("../db");
const Schema = mongoose.Schema;

const emailSchema = new Schema({
  email: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("email", emailSchema);
