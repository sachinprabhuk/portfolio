const mailgun = require("mailgun-js")({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
});

const getMailMessage = ({ name, email, subject, message }) => {
    return `Got a message from ${name}.
    Email: ${email}
    Subject: ${subject}
    Message: ${message}
    `;
};

const sendThankYouEmail = async (data) => {
    const mailData = {
        from: `prabhusachin44@gmail.com`,
        to: "prabhusachin44@gmail.com",
        subject: `${data.name} is trying to contact you.`,
        text: getMailMessage(data),
    };

    await mailgun.messages().send(mailData);
};

exports.handler = async (event) => {
    try {
        const data = JSON.parse(event.body);

        await sendThankYouEmail(data);

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "success",
            }),
        };
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "error" }),
        };
    }
};
