const db = require("../models");
const faqArticleModel = db.faqArticle;
const FAQQuestion = db.faqQuestion;

exports.createArticle = async (req, res) => {
  try {
    const { articleData, faqCategory, faqQuestion } = req.body;
    const slug = articleData.en.title.toLowerCase().replace(/[^\w\s]/gi, '').split(' ').join('-') + '-' + Math.floor(Math.random() * 1000);
    const article = new faqArticleModel({
      articleData,
      slug,
      faqCategory,
      faqQuestion,
    });
    await article.save();

    const faq_Question = await FAQQuestion.findById(faqQuestion);
    if (!faq_Question) {
      return res.status(404).json({ error: "FAQ question not found" });
    }
    faq_Question.faqArticles.push({
      title: article.articleData,
      slug: article.slug
    });
    await faq_Question.save();
    res.status(201).json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getArticles = async (req, res) => {
  try {
    const article = await faqArticleModel.find({});

    if (!article) {
      return res.status(404).json({ error: "Article not found" });
    }
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getArticleBySlug = async (req, res) => {
  try {
    const {slug} = req.params;
    const article = await faqArticleModel.find({slug});

    if (!article) {
      return res.status(404).json({ error: "Article not found" });
    }
    res.json(article[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateArticle = async (req, res) => {
  try {
    const { title, content, faqCategory, faqQuestion } = req.body;
    const article = await faqArticleModel
      .findByIdAndUpdate(
        req.params.id,
        { title, content, faqCategory, faqQuestion },
        { new: true }
      )
      .populate("faqCategory")
      .populate("faqQuestion");
    if (!article) {
      return res.status(404).json({ error: "Article not found" });
    }
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    const article = await faqArticleModel.findByIdAndDelete(req.params.id);
    if (!article) {
      return res.status(404).json({ error: "Article not found" });
    }
    res.json({ message: "Article deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
