const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  const message = {
    to: email,
    from: 'erickce40@gmail.com',
    subject: 'Thanks for joining our app.',
    text: `Welcome to the app, ${name}!`,
  };
  sgMail.send(message);
};

const sendGoodbyeEmail = (email, name) => {
  const message = {
    to: email,
    from: 'erickce40@gmail.com',
    subject: `We are sorry you decided to left our app, ${name}`,
    text: 'Please tell us what can we do to improve your experience.',
  };
  sgMail.send(message);
};

module.exports = {
  sendWelcomeEmail,
  sendGoodbyeEmail,
};

// const msg = {
//   to: 'erick.castaneda.martinez1@gmail.com',
//   from: 'erickce40@gmail.com',
//   subject: 'Sending with Twilio SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };

// sgMail.send(msg)
//   .then(() => {
//     console.log('Email sent succesfully');
//   }).catch((e) => {
//     console.log(e.response.body);
//   });
