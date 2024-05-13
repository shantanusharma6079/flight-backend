module.exports = (mongoose) => {
  var schema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    questions: [
      {
        title: String,
        slug: String
      },
    ],
  });

  const FAQCategory = mongoose.model("faqCategory", schema);
  return FAQCategory;
};
