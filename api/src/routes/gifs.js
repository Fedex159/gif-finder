var express = require("express");
var router = express.Router();
var gifs = require("../controllers/gifs");

router.get("/", gifs);

module.exports = router;
