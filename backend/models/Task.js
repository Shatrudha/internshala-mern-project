const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Task", taskSchema);
