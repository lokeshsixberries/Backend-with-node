const mongoose = require("mongoose");

const Student_Schema = new mongoose.Schema({
  email: String,
  password: String,
});

module.exports = new mongoose.model("Student", Student_Schema);
