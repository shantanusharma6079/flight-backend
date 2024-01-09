module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      category: String,
      page_type: String,
      title: String,
      data: Array,
      description: String,
      meta_keywords: String,
      meta_description: String,
      meta_title: String,
      cover_img: String,
      lang: String,
      common_slug: String,
      slug: String,
      query: Object
      //published: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const {_id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Webpages = mongoose.model("webpages", schema);
  return Webpages;
};
