"use server";

import { ProInvestWelcomeEmail } from "@/emails/wellcome";
import Plunk from "@plunk/node";
import { render } from "@react-email/render";

export const sendEmail = async (to: string) => {
  try {
    const apiKey = process.env.PLUNK_API_KEY;

    if (!apiKey) {
      console.error("PLUNK_API_KEY is not configured");
      return;
    }

    const plunk = new Plunk(apiKey);

    // Subscribe user to contact list first using direct API call
    try {
      const subscribeResponse = await fetch(
        "https://api.useplunk.com/v1/contacts/subscribe",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: to,
          }),
        }
      );

      if (subscribeResponse.ok) {
        console.log(`User ${to} subscribed to contact list`);
      } else {
        console.error(`Failed to subscribe user: ${subscribeResponse.status}`);
      }
    } catch (subscribeError) {
      console.error("Failed to subscribe user:", subscribeError);
      // Continue with email sending even if subscription fails
    }

    // Send welcome email
    const body = await render(<ProInvestWelcomeEmail />);

    await plunk.emails.send({
      to: to,
      subject:
        "Dobrodošli u ProInvest - Vaš partner za investicije u nekretnine",
      body,
    });

    console.log(`Welcome email sent to ${to}`);
  } catch (error) {
    console.error("Email sending failed:", error);
  }
};
