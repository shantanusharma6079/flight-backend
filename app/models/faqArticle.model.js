module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      articleData: {
        type: Object,
        required: true,
      },
      slug: {
        type: String,
        required: true,
      },
      faqCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "faqCategory",
      },
      faqQuestion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "faqQuestion",
      },
    },
    { timestamps: true }
  );

  const faqArticleModel = mongoose.model("faqArticle", schema);
  return faqArticleModel;
};
