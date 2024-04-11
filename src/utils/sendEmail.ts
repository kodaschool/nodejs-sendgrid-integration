import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);
interface EmailProps {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
}
const sendEmail = ({ to, from, subject, text, html }: EmailProps) => {
  const message = { to, from, subject, text, html };
  return sendgrid.send(message);
};

export default sendEmail;
