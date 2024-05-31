module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      name: String,
      code: String,
      //published: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const {_id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Languages = mongoose.model("languages", schema);
  return Languages;
};
