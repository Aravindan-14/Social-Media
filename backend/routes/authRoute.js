import express from "express";
import { AuthController } from "../controller/authController.js";

const router = express.Router();

router.post("/login", AuthController.login);
router.post("/signUp", AuthController.signUp);

export default router;
