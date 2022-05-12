const router = require("express").Router();

router.use("/session", require("./login"));
router.use("/urls", require("./urls"));
router.use(require("../middlewares/token"));
router.use("/user-urls", require("./user-urls"));

module.exports = router;
