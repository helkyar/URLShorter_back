const router = require("express").Router();

router.use("/login", require("./login"));
router.use("/", require("./redirect"));
module.exports = router;
