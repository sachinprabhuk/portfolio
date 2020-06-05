const admin = require("firebase-admin");
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

const { user, password: pass, from, to } = functions.config().gmail;

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user,
        pass,
    },
});

admin.initializeApp();

const messageToHTML = (msgObj) => {
    return `<div>${Object.keys(msgObj)
        .map((key) => `<p>${key} - ${msgObj[key]}</p>`)
        .join("")}</div>`;
};

exports.newMessageArrived = functions.firestore
    .document("Messages/{id}")
    .onWrite(async (change, context) => {
        const data = change.after.data();
        console.log("Recieved data: ", data);
        const mailOptions = {
            from,
            to,
            subject: "Someone dropped a message on your website",
            html: messageToHTML(data),
        };

        await transporter.sendMail(mailOptions);
    });
