module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      languages: Object,
      category: String,
      data: Object,
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
