module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            Flights: Array
        },
        { timestamps: false }
    );

    const Flights = mongoose.model("mcflights", schema);
    return Flights;
};
