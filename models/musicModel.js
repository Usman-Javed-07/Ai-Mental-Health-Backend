const mongoose = require("mongoose");

const MusicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  audioUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Music", MusicSchema);
