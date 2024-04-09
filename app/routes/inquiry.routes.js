module.exports = app => {
    const inquiry = require("../controllers/inquiry.controller.js");

    var router = require("express").Router();

    // Create a new flight
    router.post("/", inquiry.create);
    router.get("/", inquiry.getAllInquiries);
    router.get("/:type", inquiry.getTypeInquiries);
    router.post("/:inquiryId/status", inquiry.updateStatus);
    router.delete("/delete", inquiry.deleteAll);

    app.use("/api/inquiry", router);
};
