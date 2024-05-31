module.exports = app => {
    const newsletterSubscriber = require("../controllers/newsletterSubscriber.controller.js");

    var router = require("express").Router();

    router.post("/", newsletterSubscriber.create);
    router.get("/", newsletterSubscriber.getAll);

    app.use("/api/newsletter-subscribe", router);
};