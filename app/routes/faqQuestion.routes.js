module.exports = app => {
    const faqQuestion = require("../controllers/faqQuestion.controller.js");

    var router = require("express").Router();

    router.post("/", faqQuestion.createQuestion);
    router.get("/", faqQuestion.getQuestions);
    router.get("/:slug", faqQuestion.getQuestionBySlug);

    app.use("/api/faqQuestion", router);
};
