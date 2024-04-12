import express from "express";
import authRoute from "./authRoute.js";
import paymentRouter from "./payment.js";

const router = express.Router();

router.use("/auth", authRoute);
router.use("/pay", paymentRouter);

export { router };
