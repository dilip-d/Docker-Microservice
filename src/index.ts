import express from "express";
import dotenv from "dotenv";
const app = express();
const port = process.env.SERVER_PORT;

dotenv.config();

app.get("/", (req, res) => {
  res.json({});
});

app.listen(port, () => {
  // console.log(`server started at http://localhost:${port}`);
});
