const db = require("../models");
const Inquiry = db.inquiry;

exports.create = async (req, res) => {
  try {
    const inquiryData = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      formData: req.body.formData,
      status: "Pending",
    };

    if (req.body.offerId) {
      inquiryData.offerId = req.body.offerId;
      inquiryData.type = "OFF-line";
    } else {
      inquiryData.type = "On-line";
    }

    const inquiry = new Inquiry(inquiryData);

    inquiry
      .save(inquiry)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Inquiry.",
        });
      });
  } catch (error) {
    console.error("Error calling API:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getAllInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find();
    res.send(inquiries);
  } catch (error) {
    console.error("Error calling API:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getTypeInquiries = async (req, res) => {
  const type = req.params.type;

  try {
    const inquiries = await Inquiry.find({type: type});
    res.send(inquiries);
  } catch (error) {
    console.error("Error calling API:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteAll = async (req, res) => {
  try {
    // Use the deleteMany method to delete all documents in the Flights collection
    const result = await Inquiry.deleteMany({});

    res.send({
      message: `${result.deletedCount} Inquiries deleted successfully.`,
    });
  } catch (error) {
    console.error("Error deleting inquiries:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Add comment to inquiry

exports.updateStatus = async (req, res) => {
  const { user, comment, status } = req.body;
  const { inquiryId } = req.params;

  try {
    const inquiry = await Inquiry.findById(inquiryId);

    if (!inquiry) {
      return res.status(404).json({ error: "Inquiry not found" });
    }

    inquiry.status = status;
    inquiry.comments.push({ user, comment, status });
    await inquiry.save();

    res.json({ message: "Comment added successfully", inquiry });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
