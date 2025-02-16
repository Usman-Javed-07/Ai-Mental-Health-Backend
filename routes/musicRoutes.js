const express = require("express");
const multer = require("multer");
const path = require("path");
const { addMusic, getMusicList } = require("../controllers/musicController");

const router = express.Router();

// Multer storage configuration for images
const imageStorage = multer.diskStorage({
  destination: "uploads/images/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Multer storage configuration for music files
const musicStorage = multer.diskStorage({
  destination: "uploads/music/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Multer upload configuration
const uploadFiles = multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        if (file.fieldname === "image") {
          cb(null, "uploads/images/");
        } else if (file.fieldname === "audio") {
          cb(null, "uploads/music/");
        } else {
          return cb(new Error("Unexpected field"));
        }
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
      },
    }),
  }).fields([
    { name: "image", maxCount: 1 },
    { name: "audio", maxCount: 1 },
  ]);
  

// Test route
router.get("/test", (req, res) => {
  res.send("Music route is working");
});

router.post("/upload", uploadFiles, addMusic);
router.get("/list", getMusicList);

module.exports = router; 
