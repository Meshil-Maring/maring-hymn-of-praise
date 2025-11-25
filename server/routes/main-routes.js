const { Router } = require("express");
const router = Router();

const { home } = require("../controller/home");
const { song } = require("../controller/song");
const { signup } = require("../controller/signup");

router.get("/", home);
router.get("/song/:id", song);
router.post("/submit", signup);

module.exports = router;
