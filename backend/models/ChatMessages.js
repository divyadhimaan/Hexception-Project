const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    message: {
      type: String,
    },
    sender: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const RoomSchema = new mongoose.Schema({
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "school",
  },
  messages: [MessageSchema],
});

module.exports = mongoose.model("roomMessages", RoomSchema);
