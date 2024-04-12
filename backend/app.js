import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { router } from "./routes/index.js";

const APP = express();
const PORT = 5000;

APP.use(cors());
APP.use(bodyParser.json());

// function Display(req, res, next) {
//   console.log("I'm First Middleware");
//   req.Date = new Date();
//   next();
// }

// function Display2(req, res, next) {
//   console.log("I'm Second Middleware");
//   next();
// }
// APP.use(Display);
// APP.use(Display2);
// APP.get("/login", (req, res) => {
//   console.log(req.Date);
//   res.send("Login Page");
// });

APP.get("/", (req, res) => {
  console.log(req.Date);
  return res.json({
    success: "true",
    message: "Server status is good",
  });
});

APP.use("/api", router);

APP.listen(PORT, () => {
  console.log("Server is running at port 5000");
});
