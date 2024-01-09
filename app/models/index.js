const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.countries = require("./countries.model.js")(mongoose);
db.airlines = require("./airlines.model.js")(mongoose);
db.cities = require("./cities.model.js")(mongoose);
db.webpages = require("./webpages.model.js")(mongoose);
db.page_types = require("./page_types.model.js")(mongoose);
db.languages = require("./languages.model.js")(mongoose);
db.airports = require("./airports.model.js")(mongoose);
db.media = require("./media.model.js")(mongoose);
db.owflights = require("./owflights.model.js")(mongoose);
db.rtflights = require("./rtflights.model.js")(mongoose);
db.mcflights = require("./mcflights.model.js")(mongoose);
db.flights = require("./flights.model.js")(mongoose);
db.inquiry = require("./inquiry.model.js")(mongoose);
db.contactHelpYou = require("./ContactHelpYou.model.js")(mongoose);

module.exports = db;
