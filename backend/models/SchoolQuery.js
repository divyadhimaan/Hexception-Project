const mongoose = require("mongoose");

const SchoolQuerySchema = new mongoose.Schema({
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "school",
  },
  schoolName: {
    type: String,
  },
  link: {
    type: String,
  },
  pincode: {
    type: String,
  },
  room: {
    type: String,
  },
  queryType: {
    type: String,
    required: true,
  },
  subject1: {
    type: String,
  },
  subject2: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  fund: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
  },
});

module.exports = mongoose.model("schoolQuery", SchoolQuerySchema);
