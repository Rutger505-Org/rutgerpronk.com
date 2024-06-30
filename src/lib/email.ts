import nodemailer from "nodemailer";

const gmailUser = process.env.GMAIL_USER;
const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

if (!gmailUser) {
  throw new Error("GMAIL_USER is not set");
}

if (!gmailAppPassword) {
  throw new Error("GMAIL_APP_PASSWORD is not set");
}

export const mailer = nodemailer.createTransport( {
  host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
    user: gmailUser,
      pass: gmailAppPassword,
  },
});