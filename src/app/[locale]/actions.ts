"use server";

import { mailer } from "@/lib/email";

const recipientEmail = process.env.RECIPIENT_EMAIL;

if (!recipientEmail) {
  throw new Error("RECIPIENT_EMAIL is not set");
}

interface EmailMessage {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail({
  name,
  email,
  message,
}: Readonly<EmailMessage>) {
  return await mailer.sendMail({
    from: `rutgerpronk.com <${email}>`,
    to: recipientEmail,
    replyTo: email,
    subject: `Message from ${name}`,
    html: `
        <p>${message}</p>
        <p>Reply to: ${email}</p>
      `,
  });
}
