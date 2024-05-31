module.exports = app => {
    const faqArticle = require("../controllers/faqArticle.controller.js");

    var router = require("express").Router();

    router.post("/", faqArticle.createArticle);
    router.get("/", faqArticle.getArticles);
    router.get("/:slug", faqArticle.getArticleBySlug);
    router.delete("/:id", faqArticle.deleteArticle);

    app.use("/api/faqArticle", router);
};
