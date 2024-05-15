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
    faqCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "faqCategory",
    },
    faqArticles: [
      {
        title: Object,
        slug: String
      },
    ],
  });

  const FAQQuestion = mongoose.model("faqQuestion", schema);
  return FAQQuestion;
};
