const { Router } = require("express");
const router = Router();

const { home } = require("../controller/home");
const { song } = require("../controller/song");

router.get("/", home);
router.get("/song/:id", song);

module.exports = router;
