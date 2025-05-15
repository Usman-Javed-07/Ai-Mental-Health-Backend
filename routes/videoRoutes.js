const express = require("express");
const multer = require("multer");
const path = require("path");
const { addVideo, getVideoList } = require("../controllers/videoController");

const router = express.Router();

const videoStorage = multer.diskStorage({
  destination: "uploads/videos/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const uploadVideo = multer({
  storage: videoStorage,
}).fields([{ name: "video", maxCount: 1 }]);

router.get("/test", (req, res) => {
  res.send("Video route is working");
});

router.post("/upload", uploadVideo, addVideo);
router.get("/list", getVideoList);

module.exports = router;
