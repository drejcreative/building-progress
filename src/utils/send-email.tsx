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
    const body = await render(<ProInvestWelcomeEmail />);

    await plunk.emails.send({
      to: to,
      subject:
        "Dobrodošli u ProInvest - Vaš partner za investicije u nekretnine",
      body,
    });
  } catch (error) {
    console.error("Email sending failed:", error);
  }
};
