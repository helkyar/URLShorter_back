const router = require("express").Router();

router.use("/session", require("./login"));
router.use("/template", require("./template"));
router.use("/", require("./redirect"));
module.exports = router;
