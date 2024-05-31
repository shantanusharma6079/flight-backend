module.exports = (mongoose) => {
    var schema = mongoose.Schema({
      email: {
        type: String,
        required: true,
        unique: true
      }
    });
  
    const newsletterSubscriber = mongoose.model("newsletter-subscriber", schema);
    return newsletterSubscriber;
  };
  