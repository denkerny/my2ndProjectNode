
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'denis.developer.1@gmail.com',
    pass: 'denisdeveloper'
  }
});

var mailOptions = {
  from: 'denis.developer.1@gmail.com',
  to: 'denis.developer.1@gmail.com',
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