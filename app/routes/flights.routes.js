module.exports = app => {
    const flights = require("../controllers/flights.controller.js");

    var router = require("express").Router();

    // Create a new flight
    router.post("/oneway/add", flights.create);
    router.post("/oneway/findBySlug", flights.findBySlug);
    router.post("/latest-flights", flights.getLatestFlights);
    router.post("/cheapest-flights", flights.findCheapestFlights);
    router.post("/direct-flights", flights.findDirectFlights);
    router.delete("/oneway/delete-all", flights.deleteAll);
    router.get("/oneway/find", flights.getFlightsByRoute);
    // router.post("/return/add", flights.rtcreate);

    // Create a new Tutorial
    // router.post("/", webpages.create);
    // router.post("/filter", webpages.filter);
    // router.post("/single", webpages.single);
    // router.post("/bylang", webpages.bylang);



    // // Retrieve all webpages
    // router.get("/", webpages.findAll);

    // // Retrieve all published webpages
    // router.get("/published", webpages.findAllPublished);

    // // Retrieve a single Tutorial with id
    // router.get("/:id", webpages.findOne);

    // // Update a Tutorial with id
    // router.put("/:id", webpages.update);

    // // Delete a Tutorial with id
    // router.delete("/:id", webpages.delete);

    // // Create a new Tutorial
    // router.delete("/", webpages.deleteAll);

    app.use("/api/flights", router);
};
