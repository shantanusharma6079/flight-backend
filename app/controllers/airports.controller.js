const db = require("../models");
const Airports = db.airports;
const itemsPerPage = 10;

// Create and Save a new Airports
exports.create = (req, res) => {
  // Validate request
  console.log(req.body)
  if (!req.body.english) {
    res.status(400).send({ message: "english variable not found!" });
    return;
  }

  // Create a Airports
  const airports = new Airports(req.body);

  // Save Airports in the database
  airports
    .save(airports)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Airports."
      });
    });
};

exports.createMultipleAirports = (req, res) => {
  // Validate request
  if (!req.body || !Array.isArray(req.body) || req.body.length === 0) {
    res.status(400).send({ message: "Invalid or empty JSON array!" });
    return;
  }

  const insertPromises = req.body.map((item) => {
    // Validate each item in the array
    // console.log('reached');
    // console.log(item.english);
    // if (!item.english) {
    //   return Promise.reject({ message: "English param can not be empty!" });
    // }

    // Create an Airports instance for each item in the array
    const airport = new Airports(item);

    // Save Airports in the database and return the promise
    return airport.save();
  });

  // Use Promise.all to wait for all insertions to complete
  Promise.all(insertPromises)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Airports."
      });
    });
};

// Retrieve all Airportss from the database.
exports.findAll = async (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  const { page } = req.query;
  if (page) {
    const pageNumber = parseInt(page, 10) || 1;

    const totalCount = await Airports.countDocuments();

    Airports.find(condition).skip((pageNumber - 1) * itemsPerPage)
      .limit(itemsPerPage)
      .then(data => {
        res.send({
          data: data,
          currentPage: pageNumber,
          totalPages: Math.ceil(totalCount / itemsPerPage)
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving airportss."
        });
      });
  } else {

    await Airports.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving citiess."
        });
      });

  }
};

// Find a single Airports with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Airports.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Airports with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Airports with id=" + id });
    });
};

// Update a Airports by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Airports.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Airports with id=${id}. Maybe Airports was not found!`
        });
      } else res.send({ message: "Airports was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Airports with id=" + id
      });
    });
};

// Delete a Airports with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Airports.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Airports with id=${id}. Maybe Airports was not found!`
        });
      } else {
        res.send({
          message: "Airports was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Airports with id=" + id
      });
    });
};

// Delete all Airportss from the database.
exports.deleteAll = (req, res) => {
  Airports.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Airportss were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all airportss."
      });
    });
};

// Find all published Airportss
exports.findAllPublished = (req, res) => {
  Airports.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving airportss."
      });
    });
};

exports.findByCode = (req, res) => {
  const code = req.params.code;
  Airports.find({ code: code })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving airportss."
      });
    });
};

exports.findByCountry = (req, res) => {
  const code = req.params.code;
  Airports.find({ country_code: code })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving airports."
      });
    });
};

exports.findByQuery = (req, res) => {
  const query = req.query.query; // Assuming the query parameter is named 'query'

  if (!query) {
    return res.status(400).send({
      message: "Query parameter is required for search."
    });
  }

  // Use a case-insensitive regular expression for a flexible search
  const regexQuery = new RegExp(query, "i");

  Airports.find({
    $or: [
      { english: regexQuery },
      { airport_name: regexQuery },
      { code: regexQuery }
    ]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving airports."
      });
    });
};
