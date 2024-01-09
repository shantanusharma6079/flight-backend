module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      airline_id: String,
      airline_code: String,
      airline_name: String,
      spanish: String,
      //published: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Airline = mongoose.model("airlines", schema);
  return Airline;
};
