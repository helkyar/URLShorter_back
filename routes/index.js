const router = require("express").Router();

router.use("/:url", require("./redirect"));
router.use("/login", require("./login"));
module.exports = router;
