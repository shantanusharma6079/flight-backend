module.exports = app => {
  const cities = require("../controllers/cities.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", cities.create);

  router.post("/add-cities", cities.createMultiple);

  // Retrieve all cities
  router.get("/", cities.findAll);

  // Retrieve all published cities
  router.get("/published", cities.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", cities.findOne);

  // Update a Tutorial with id
  router.put("/:id", cities.update);

  // Delete a Tutorial with id
  router.delete("/:id", cities.delete);

  // Create a new Tutorial
  router.delete("/", cities.deleteAll);

  app.use("/api/cities", router);
};
