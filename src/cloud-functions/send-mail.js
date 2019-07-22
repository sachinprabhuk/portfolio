const sgMail = require("@sendgrid/mail");

if (process.env.MODE === "dev") require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async event => {
  const badRequest = { statusCode: 400, body: "bad request" };

  let { body } = event;
  if (event.httpMethod !== "POST" || !body) return badRequest;

  try {
    body = JSON.parse(body);
  } catch (e) {
    return badRequest;
  }

  if (!body.email || !body.subject || !body.name || !body.message)
    return badRequest;

  try {
    const msg = {
      to: process.env.EMAIL,
      from: process.env.EMAIL,
      subject: "someone is trying to contact you from portfolio",
      html: `
				<ul>
					<li>Name : ${body.name}</li>
					<li>Email : ${body.email}</li>
					<li>subject : ${body.subject}</li>
					<li>message : ${body.message}</li>
				</ul>
			`
    };
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: "success"
    };
  } catch (e) {
    console.log(e);
    return {
      statusCode: 500,
      body: e.message
    };
  }
};
