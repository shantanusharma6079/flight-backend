const mongoose = require("mongoose");
const db = require("../models");
const faqQuestion = db.faqQuestion;
const FAQCategory = db.FAQCategory;

exports.createQuestion = async (req, res) => {
  try {
    const { name, faqCategory } = req.body;
    const slug = name.toLowerCase().replace(/[^\w\s]/gi, '').split(' ').join('-') + '-' + Math.floor(Math.random() * 1000);
    const question = new faqQuestion({ name, slug, faqCategory });
    await question.save();

    const faq_Category = await FAQCategory.findById(faqCategory);
    if (!faq_Category) {
      return res.status(404).json({ error: "FAQ category not found" });
    }
    const title = question.name;
    faq_Category.questions.push({title, slug});
    await faq_Category.save();
    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getQuestions = async (req, res) => {
  try {
    const questions = await faqQuestion.find({});
    if (!questions) {
      return res.status(404).json({ error: "Questions not found" });
    }
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateQuestion = async (req, res) => {
  try {
    const { title, content, faqCategory, faqQuestion } = req.body;
    const question = await faqQuestion
      .findByIdAndUpdate(
        req.params.id,
        { title, content, faqCategory, faqQuestion },
        { new: true }
      )
      .populate("faqCategory")
      .populate("faqQuestion");
    if (!question) {
      return res.status(404).json({ error: "question not found" });
    }
    res.json(question);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteQuestion = async (req, res) => {
  try {
    const question = await faqQuestion.findByIdAndDelete(req.params.id);
    if (!question) {
      return res.status(404).json({ error: "question not found" });
    }
    res.json({ message: "question deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
