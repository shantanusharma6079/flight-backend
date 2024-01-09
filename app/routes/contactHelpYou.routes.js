module.exports = (app) => {
  const multer = require("multer");
  const ContactHelpYou = require("../controllers/ContactHelpYou.controller");
  const path = require('path');
  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", ContactHelpYou.createContactHelpYou);
  router.get("/", ContactHelpYou.getContactHelpYou);
  router.get("/:id", ContactHelpYou.getContactHelpYouId);
  router.delete("/:id", ContactHelpYou.ContactHelpYouDeleteById);

  app.use("/api/contact-help-you", router);
};
