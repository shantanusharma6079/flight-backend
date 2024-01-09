module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            name: String,
            email: String,
            phone: Number,
            formData: Object,
            status: String
            // Origin: Object,
            // Destination: Object,
            // Type: String,
            // Dates: Object,
            // Travelers: Object,
            // Cabin: String
        },
        { timestamps: true }
    );

    const Inquiry = mongoose.model("inquiries", schema);
    return Inquiry;
};
