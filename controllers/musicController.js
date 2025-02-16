const Music = require("../models/musicModel");

const addMusic = async (req, res) => {
  try {
    const { name } = req.body;
    if (!req.files || !req.files.image || !req.files.audio) {
      return res.status(400).json({ message: "Both image and audio files are required" });
    }

    const imageUrl = `/uploads/images/${req.files.image[0].filename}`;
    const audioUrl = `/uploads/music/${req.files.audio[0].filename}`;

    const newMusic = new Music({
      name,
      imageUrl,
      audioUrl,
    });

    await newMusic.save();
    res.status(201).json({ message: "Music uploaded successfully", music: newMusic });
  } catch (error) {
    console.error("Error uploading music:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getMusicList = async (req, res) => {
  try {
    const musicList = await Music.find();
    res.json(musicList);
  } catch (error) {
    console.error("Error fetching music list:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { addMusic, getMusicList };
