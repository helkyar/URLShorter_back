const router = require("express").Router();

router.get("/:url", require("../controllers/redirect/getRedirect"));
router.post("/add", require("../controllers/redirect/postRedirect"));

module.exports = router;
