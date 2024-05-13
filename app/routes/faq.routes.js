module.exports = app => {
    const faq = require("../controllers/faq.controller.js");

    var router = require("express").Router();

    router.post("/", faq.create);
    router.get("/", faq.getAll);

    app.use("/api/faq", router);
};
