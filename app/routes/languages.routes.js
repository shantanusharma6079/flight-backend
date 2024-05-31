module.exports = app => {
  const languages = require("../controllers/languages.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", languages.create);

  // Retrieve all languages
  router.get("/", languages.findAll);

  // Retrieve all published languages
  router.get("/published", languages.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", languages.findOne);

  // Update a Tutorial with id
  router.put("/:id", languages.update);

  // Delete a Tutorial with id
  router.delete("/:id", languages.delete);

  // Create a new Tutorial
  router.delete("/", languages.deleteAll);

  app.use("/api/languages", router);
};
