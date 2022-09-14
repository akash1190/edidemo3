var nodemailer = require('nodemailer');
const { google } = require('googleapis');
const CLIENT_ID =
"27808167253-mejc0vi0j4sm4973iqsleqtcu3gqla23.apps.googleusercontent.com";
const CLIENT_SECRET = "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";

async function sendMail() {
  try {
    
    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: 'OAuth2',
        user: 'akashtest1190@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        accessToken: "ya29.a0AVA9y1v6siZpgJ9CGP9FaZ6dHMUo_rVKSwTQC-SQjzD0xlFDngqmYEzUA1U6bYqFWYylWQXzUmsOMThtA5Fv_xIgfFeJU7LgDEj-24EXKje3bd1RBkULFI_TFReQFWfStA6guQPQCR2P-Mn1hZYPwjLyf81-aCgYKATASARASFQE65dr8vVhtn9xRBuEpz1Qs_olZyQ0163",
        
      },
    });
 
    const mailOptions = {
      from: 'akashtest1190@gmail.com',
      to: 'hemant.sharma@rsystems.com',
      subject: 'Hello from gmail using API for',
      text: 'Hello from gmail email using API',
      html: '<h1>Hello from gmail email using API</h1>',
    };
 
    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}
 
sendMail()
  .then((result) => console.log('Email sent...', result))
  .catch((error) => console.log(error.message));