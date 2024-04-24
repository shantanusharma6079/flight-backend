const express = require("express");
const cors = require("cors");
require('dotenv').config()
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

var multer = require("multer");
// Set storage for multer
// Set storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); // The uploaded files will be stored in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique filename for each uploaded file
  },
});

const upload = multer({ storage }); // 'image' should match the field name used in the front-end


app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}))


var corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://flight-project-five.vercel.app"
  ]
};

app.use(cors(corsOptions));


// parse requests of content-type - application/json
/* app.use(bodyParser.json({
  type: ["application/x-www-form-urlencoded", "application/json"], // Support json encoded bodies
})); */

// parse requests of content-type - application/x-www-form-urlencoded
//app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to flight_booking_website application." });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Replace the following condition with your actual admin credentials validation logic
  if (email === 'admin@email.com' && password === 'admin') {
    res.json({ isAdmin: true });
  } else {
    res.status(401).json({ isAdmin: false });
  }
});

require("./app/routes/airlines.routes")(app);
require("./app/routes/countries.routes")(app);
require("./app/routes/webpages.routes")(app);
require("./app/routes/page_types.routes")(app);
require("./app/routes/languages.routes")(app);
require("./app/routes/cities.routes")(app);
require("./app/routes/airports.routes")(app);
require("./app/routes/flights.routes")(app);
require("./app/routes/inquiry.routes")(app);
require("./app/routes/tickets.routes")(app);
require("./app/routes/media.routes")(app,upload);
app.use('/images', express.static(__dirname+'/uploads/'));

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
