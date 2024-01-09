module.exports = app => {
  const countries = require("../controllers/countries.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", countries.create);

  router.post("/add-countries", countries.createMultipleCountries);

  // Retrieve all countries
  router.get("/", countries.findAll);

  // Retrieve all published countries
  router.get("/published", countries.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", countries.findOne);

  // Update a Tutorial with id
  router.put("/:id", countries.update);

  // Delete a Tutorial with id
  router.delete("/:id", countries.delete);

  // Create a new Tutorial
  router.delete("/", countries.deleteAll);

  app.use("/api/countries", router);
};
