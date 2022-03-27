const router = require("express").Router();

router.get("/", require("../controllers/redirect/getRedirect"));

module.exports = router;
