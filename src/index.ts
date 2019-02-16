import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();
const port = process.env.APP_PORT || 3006; // default port to listen

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
