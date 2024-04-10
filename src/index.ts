import express from "express";
import dotenv from "dotenv";
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Sendgrid intergration");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
