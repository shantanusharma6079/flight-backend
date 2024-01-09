const db = require("../models");
const Inquiry = db.inquiry;

exports.create = async (req, res) => {
    try {
        const inquiry = new Inquiry({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            formData: req.body.formData,
            status: 'Pending'
        });

        inquiry
            .save(inquiry)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the Inquiry."
                });
            });
    } catch (error) {
        console.error('Error calling API:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.updateStatus = async (req, res) => {
    try {
        const inquiryId = req.params.inquiryId; // Assuming you are passing the inquiry ID in the URL

        // Find the inquiry by ID
        const inquiry = await Inquiry.findById(inquiryId);

        if (!inquiry) {
            return res.status(404).json({ error: 'Inquiry not found' });
        }

        // Update the status field
        inquiry.status = req.body.status; // Assuming you are passing the new status in the request body

        // Save the updated inquiry
        const updatedInquiry = await inquiry.save();

        res.json(updatedInquiry);
    } catch (error) {
        console.error('Error calling API:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getAllInquiries = async (req, res) => {
    try {
        const inquiries = await Inquiry.find();
        res.send(inquiries);
    } catch (error) {
        console.error('Error calling API:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.deleteAll = async (req, res) => {
    try {
        // Use the deleteMany method to delete all documents in the Flights collection
        const result = await Inquiry.deleteMany({});

        res.send({
            message: `${result.deletedCount} Inquiries deleted successfully.`,
        });
    } catch (error) {
        console.error('Error deleting inquiries:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};