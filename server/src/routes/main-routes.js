const { Router } = require("express");
const router = Router();

const { home } = require("../controller/home");
const { songApi } = require("../controller/song-api");

router.get("/", home);
router.get("/song/:id", songApi);

module.exports = router;
