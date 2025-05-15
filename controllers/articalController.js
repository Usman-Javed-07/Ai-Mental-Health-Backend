const Article = require("../models/articleModel");

const addArticle = async (req, res) => {
  try {
    const { title, content, category } = req.body;

    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Title and content are required" });
    }

    const newArticle = new Article({ title, content, category });
    await newArticle.save();

    res
      .status(201)
      .json({ message: "Article added successfully", article: newArticle });
  } catch (error) {
    console.error("Add Article Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getArticles = async (req, res) => {
  try {
    const articles = await Article.find().sort({ createdAt: -1 });
    res.json(articles);
  } catch (error) {
    console.error("Get Articles Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { addArticle, getArticles };
