import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Welcome to Maring Hymn of Praise API ");
});

export default router;
