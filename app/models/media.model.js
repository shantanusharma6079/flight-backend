module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      image: String,
      type: String,
      category: String,
      subcategory: String,
      alt: String
      //published: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const {_id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Media = mongoose.model("media", schema);
  return Media;
};
