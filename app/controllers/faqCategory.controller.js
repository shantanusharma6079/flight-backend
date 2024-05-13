const mongoose = require("mongoose");
const db = require("../models");
const FAQCategory = db.FAQCategory;

exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    // Generate slug from name
    const slug = name.toLowerCase().replace(/[^\w\s]/gi, '').split(' ').join('-') + '-' + Math.floor(Math.random() * 1000);

    const category = new FAQCategory({ name, slug });
    await category.save();

    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCategory = async (req, res) => {
  try {
    const category = await FAQCategory.find({});
    if (!category) {
      return res.status(404).json({ error: "category not found" });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
