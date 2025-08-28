import { ProInvestWelcomeEmail } from "@/emails/wellcome";
import Plunk from "@plunk/node";
import { render } from "@react-email/render";

const plunk = new Plunk("<API_KEY>");

const body = await render(<ProInvestWelcomeEmail />);

export const sendEmail = async (to: string) => {
  await plunk.emails.send({
    to: to,
    subject: "Hello world!",
    body,
  });
};
