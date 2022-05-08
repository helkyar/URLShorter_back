const router = require("express").Router();

router.post("/add", require("../controllers/urls/postRedirect"));
router.get("/:urlid", require("../controllers/urls/getRedirect"));
router.get("/user/:id", require("../controllers/urls/getUserUrls"));
router.delete("/delete/:id", require("../controllers/urls/delUrl"));
module.exports = router;
