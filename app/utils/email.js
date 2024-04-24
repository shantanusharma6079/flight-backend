const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  // Your SMTP configuration here (e.g., host, port, secure, auth)
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: "heidi87@ethereal.email",
    pass: "RRMt3WY63HQ4SaXMbD",
  },
});

const sendEmail = async (to, subject, text) => {
  try {
    await transporter.sendMail({
      from: '"Flight Support App" <heidi87@ethereal.email>',
      to,
      subject,
      text,
    });
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending email");
  }
};

module.exports = { sendEmail };
