const db = require("../models");
const ContactHelp = db.contactHelpYou;

exports.createContactHelpYou = async (req, res) => {
  try {
    // const data = new ContactHelp(req.body)
   const data = new ContactHelp({
     email: req.body.email,
     subject: req.body.subject,
     description: req.body.description,
     number: req.body.number
   });
    if (!data) {
      return res.status(404).json({ message: "Error" });
    }
    const saveData = await data.save();
    res
      .status(201)
      .json({ message: "data saved successfully", data: saveData });
   
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
};

exports.getContactHelpYou = async (req, res) => {
  try {
    const data = await ContactHelp.find({});
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
};

exports.getContactHelpYouId = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await ContactHelp.findById(id);

    if (!data) {
      return res.status(404).json({ message: "data not found" });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
};
exports.ContactHelpYouDeleteById = async (req, res) => {
  const id = req.params.id;
  try {
    // console.log(id);
    const data = await ContactHelp.findOneAndDelete({ _id: id }, req.body);
    res.status(201).json({ message: "Data delete Successful", data });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
};
