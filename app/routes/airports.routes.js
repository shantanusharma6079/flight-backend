module.exports = app => {
  const airports = require("../controllers/airports.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", airports.create);

  router.post("/add-airports", airports.createMultipleAirports);

  // Retrieve all airports
  router.get("/", airports.findAll);

  // Retrieve all published airports
  router.get("/published", airports.findAllPublished);

  // Retrieve a single Tutorial with id
  // router.get("/:id", airports.findOne);

  router.get("/code/:code", airports.findByCode);
  router.get("/country-code/:code", airports.findByCountry);
  router.get("/search", airports.findByQuery);

  // Update a Tutorial with id
  router.put("/:id", airports.update);

  // Delete a Tutorial with id
  router.delete("/:id", airports.delete);

  // Create a new Tutorial
  router.delete("/", airports.deleteAll);

  app.use("/api/airports", router);
};
