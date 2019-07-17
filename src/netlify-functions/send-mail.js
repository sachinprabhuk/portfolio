const nodemailer = require("nodemailer");

// import vars from .env if in dev mode. other mode is production
// which is setup on netlify.
if (process.env.MODE === "local") {
  const dotenv = require("dotenv");
  dotenv.config();
}

export async function handler(event, context) {
  if (event.httpMethod !== "POST")
    return {
      statusCode: 400,
      body: "bad request"
    };

  const body = JSON.parse(event.body);

  if (!body.name || !body.email || !body.message || !body.subject)
    return {
      statusCode: 400,
      body: "Bad request"
    };
  const { name, email, message, subject } = body;
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
      }
    });
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `Some on is trying to contact you via portfolio 
      with the following subject -> ${subject}`,
      html: `
        <h3>details</h3>
        <p>name: ${name}</p>
        <p>email: ${email}</p>
        <p>message: ${message}</p>
      `
    });
    return {
      statusCode: 200,
      body: "success"
    };
  } catch (e) {
    console.log("--------error start------------>");
    console.log(e);
    console.log("--------error end------------");
    return {
      statusCode: 500,
      body: "failed!!"
    };
  }
}
