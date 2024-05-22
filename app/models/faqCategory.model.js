module.exports = (mongoose) => {
  var schema = mongoose.Schema({
    title: {
      type: Object,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    questions: [
      {
        questionid: mongoose.Schema.Types.ObjectId,
        title: Object,
        slug: String
      },
    ],
  });

  const FAQCategory = mongoose.model("faqCategory", schema);
  return FAQCategory;
};