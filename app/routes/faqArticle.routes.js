module.exports = app => {
    const faqArticle = require("../controllers/faqArticle.controller.js");

    var router = require("express").Router();

    router.post("/", faqArticle.createArticle);
    router.get("/", faqArticle.getArticles);
    router.get("/:slug", faqArticle.getArticleBySlug);

    app.use("/api/faqArticle", router);
};
