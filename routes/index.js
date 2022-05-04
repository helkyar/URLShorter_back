const router = require("express").Router();

// Session __________________________________________
router.use("/session", require("./login"));

// JWT middleware auth ______________________________
// router.use(require("../middlewares/token"));

// Other routes _____________________________________
router.use("/urls", require("./urls"));

module.exports = router;
