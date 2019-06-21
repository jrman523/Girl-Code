var nodemailer = require('nodemailer');
require("dotenv").config();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'm.restrepo95@gmail.com',
    pass: process.env.EMAIL
  }
});

var mailOptions = {
  from: 'm.restrepo95@gmail.com',
  to: 'm.restrepo95@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});