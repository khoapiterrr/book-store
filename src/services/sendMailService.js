/**
/**
 *
 * This call sends a message to one recipient.
 *
 */

module.exports.send = async (payload) => {
  console.log(process.env.MJ_APIKEY_PUBLIC, 'process.env.MJ_APIKEY_PUBLIC');
  const mailjet = require('node-mailjet').connect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE,
  );
  const request = mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: 'ltk.gym@gmail.com',
          Name: 'Trọng Khoa',
        },
        To: [
          {
            Email: payload.email,
            Name: payload.name,
          },
        ],
        Subject: payload.subject,
        TextPart: payload.textPart,
        HTMLPart: payload.htmlPart,
      },
    ],
  });
  request
    .then((result) => {
      console.log(result.body);
    })
    .catch((err) => {
      console.log(err);
    });
};
