import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: "True",
    message: "payment success   ",
  });
});

export default router;
