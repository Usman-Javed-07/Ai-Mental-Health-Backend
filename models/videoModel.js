const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  videoUrl: { type: String, required: true },
});

module.exports = mongoose.model("Video", VideoSchema);
