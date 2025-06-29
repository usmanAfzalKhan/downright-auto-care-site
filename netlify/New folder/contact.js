// netlify/functions/contact.js
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed"
    };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch (err) {
    return {
      statusCode: 400,
      body: "Invalid JSON"
    };
  }

  const msg = {
    to: "downrightautocare@gmail.com",     // client’s inbox
    from: "downrightautocare@gmail.com",   // verified sender
    subject: "📅 New Booking Request",
    html: `
      <h2>New Booking Request</h2>
      <ul>
        <li><strong>Name:</strong> ${data.name}</li>
        <li><strong>Phone:</strong> ${data.phone}</li>
        <li><strong>Date:</strong> ${data.date}</li>
        <li><strong>Service:</strong> ${data.service}</li>
        <li><strong>Referred:</strong> ${data.referred}${data.referred === "yes" ? ` by ${data.referrer}` : ""}</li>
        <li><strong>Message:</strong> ${data.message || "—"}</li>
      </ul>
    `
  };

  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true })
    };
  } catch (err) {
    console.error("SendGrid error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Email failed to send" })
    };
  }
}
