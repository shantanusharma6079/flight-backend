module.exports = app => {
    const faqCategory = require("../controllers/faqCategory.controller.js");

    var router = require("express").Router();

    router.post("/", faqCategory.createCategory);
    router.get("/", faqCategory.getCategory);

    app.use("/api/faqCategory", router);
};
