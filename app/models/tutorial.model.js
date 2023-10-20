module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      date: String,
      latitude: double,
      longitude: double
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tbl_genLocation", schema);
  return Tutorial;
};
