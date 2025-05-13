const express = require("express");
const { addArticle, getArticles } = require("../controllers/articalController");
const router = express.Router();

router.post("/add", addArticle);
router.get("/list", getArticles);

module.exports = router;
