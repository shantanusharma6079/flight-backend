module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      city_id: String,
      city_code: String,
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

  const Cities = mongoose.model("cities", schema);
  return Cities;
};
