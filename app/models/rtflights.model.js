module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            DepartFlights: Array,
            ReturnFlights: Array
        },
        { timestamps: false }
    );

    const Flights = mongoose.model("rtflights", schema);
    return Flights;
};
