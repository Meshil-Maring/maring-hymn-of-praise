import { Router } from "express";
import { Home } from "../controllers/home";
import { Song } from "../controllers/song";

const router = Router();

router.get("/", Home);
router.get("/song/:id", Song);

export default router;
