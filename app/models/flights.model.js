module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            Flight: Object,
            Origin: Object,
            Destination: Object,
            StopsNumber: Number,
            StopsName: Array,
            PricePerTicket: Number
        },
        { timestamps: false }
    );

    const Flights = mongoose.model("flights", schema);
    return Flights;
};
