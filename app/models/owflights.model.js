module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            flights: Array
        },
        { timestamps: false }
    );

    const Flights = mongoose.model("owflights", schema);
    return Flights;
};
