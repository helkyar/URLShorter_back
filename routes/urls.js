const router = require("express").Router();

router.post("/add", require("../controllers/urls/postRedirect"));
router.get("/:urlid", require("../controllers/urls/getRedirect"));
module.exports = router;
