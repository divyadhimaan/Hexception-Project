const mongoose = require("mongoose");

const SchoolTeachingSchema = new mongoose.Schema({
  socialscience: {
    type: Boolean,
  },
  science: {
    type: Boolean,
  },
  maths: {
    type: Boolean,
  },
  english: {
    type: Boolean,
  },
  hindi: {
    type: Boolean,
  },
});

module.exports = mongoose.model("schoolTeaching", SchoolTeachingSchema);
