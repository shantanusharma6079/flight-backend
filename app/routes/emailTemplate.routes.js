module.exports = app => {
    const emailTemplate = require("../controllers/emailTemplate.controller.js");

    var router = require("express").Router();

    router.post("/", emailTemplate.create);
    router.get("/", emailTemplate.getAll);
    router.post('/send-email', emailTemplate.sendEmail);
    router.delete('/:id', emailTemplate.delete);

    app.use("/api/emailTemplate", router);
};
