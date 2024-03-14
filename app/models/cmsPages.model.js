module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            title: String,
            data: Object
        },
        { timestamps: false }
    );

    schema.method("toJSON", function () {
        const { _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const cmsPages = mongoose.model("cmsPages", schema);
    return cmsPages;
}