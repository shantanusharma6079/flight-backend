module.exports = app => {
    const cmsPages = require("../controllers/cmsPages.controller.js");

    var router = require("express").Router();

    router.post("/", cmsPages.create);

    router.get("/:slug", cmsPages.findOne);

    app.use("/api/cms-page");
}