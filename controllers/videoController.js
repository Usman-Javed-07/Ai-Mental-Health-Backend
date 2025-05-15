const Video = require("../models/videoModel");

const addVideo = async (req, res) => {
  try {
    const { name } = req.body;
    if (!req.files || !req.files.video) {
      return res.status(400).json({ message: "Video file is required" });
    }

    const videoUrl = `/uploads/videos/${req.files.video[0].filename}`;

    const newVideo = new Video({
      name,
      videoUrl,
    });

    await newVideo.save();
    res
      .status(201)
      .json({ message: "Video uploaded successfully", video: newVideo });
  } catch (error) {
    console.error("Error uploading video:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getVideoList = async (req, res) => {
  try {
    const videoList = await Video.find();
    res.json(videoList);
  } catch (error) {
    console.error("Error fetching video list:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { addVideo, getVideoList };
