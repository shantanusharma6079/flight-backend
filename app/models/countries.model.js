module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      country_id: String,
      country_code: String,
      english: String,
      spanish: String,
      //published: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const {_id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Countries = mongoose.model("countries", schema);
  return Countries;
};
