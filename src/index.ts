import express, { Request, Response } from "express";
import dotenv from "dotenv";
import sendEmail from "./utils/sendEmail";
import { LoggerService } from "./libraries/logger";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

function getMessage() {
  const body =
    "This is a test email using SendGrid from Node.js. It is working!!";
  return {
    to: process.env.CLIENT_EMAIL as string,
    from: process.env.SENDER_EMAIL as string,
    subject: "Test email with Node.js and SendGrid",
    text: body,
    html: `<strong>${body}</strong>`,
  };
}

app.post("/api/test-email", async (_req: Request, res: Response) => {
  try {
    await sendEmail(getMessage());
    LoggerService.logInfo("working!");
    res.status(200).send({
      message: "Email sent successfully!",
    });
  } catch (error: any) {
    LoggerService.logError(error.message);
    res.status(500).send({
      message: "Email not sent!",
      error: error?.message,
    });
  }
});
app.listen(PORT, () => {
  LoggerService.logInfo(`Server is running on port ${PORT}`);
});
