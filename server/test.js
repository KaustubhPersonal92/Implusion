// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'AC7de7e6adbcfecff8611b939b6cb6bd37';
const authToken = '67d94d21c9e19756f7388c7e6008c1b9';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+19402360615',
     to: '+917007825959'
   })
  .then(message => console.log(message.sid))
  .done();