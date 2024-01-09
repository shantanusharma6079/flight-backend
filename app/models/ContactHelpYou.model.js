module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        email: String,
        subject: String,
        description: String,
        number: Number,
        file_attachments:String,
        //published: Boolean
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function () {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
   const ContactHelpYou = mongoose.model("contacthelpyou", schema);
   return ContactHelpYou
  };
  