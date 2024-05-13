module.exports = (app) => {
  const multer = require("multer");
  const Tickets = require("../controllers/tickets.controller");
  const path = require('path');
  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", Tickets.createTicket);
  router.get("/:page", Tickets.getTicket);
  router.get("/:id", Tickets.getTicketById);
  router.delete("/:id", Tickets.TicketDeleteById);
  router.put('/tickets/:ticketId/status', Tickets.updateTicketStatus);

  app.use("/api/contact-help-you", router);
};
