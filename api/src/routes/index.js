const { Router } = require("express");
const gifs = require("./gifs");

const router = Router();

router.use("/gifs", gifs);

module.exports = router;
