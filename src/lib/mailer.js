const nodemailer = require('nodemailer');

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0c8b93ca5999c7",
    pass: "e8ff77b143a9e1"
  }
});