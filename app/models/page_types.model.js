module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      languages: Object,
      category: String,
      // country_code: String,
      // english: String,
      // spanish: String,
      //published: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const {_id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Page_types = mongoose.model("page_types", schema);
  return Page_types;
};
