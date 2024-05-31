module.exports = app => {
  const airlines = require("../controllers/airlines.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", airlines.create);

  // Retrieve all airlines
  router.get("/", airlines.findAll);

  router.get("/import", airlines.importData);
  
  // Retrieve all published airlines
  router.get("/published", airlines.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", airlines.findOne);

  // Update a Tutorial with id
  router.put("/:id", airlines.update);

  // Delete a Tutorial with id
  router.delete("/:id", airlines.delete);

  // Create a new Tutorial
  router.delete("/", airlines.deleteAll);



  app.use("/api/airlines", router);
};
