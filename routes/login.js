const router = require("express").Router();

router.post("/", require("../controllers/checkLogin"));
router.get("/", require("../controllers/checkLogin"));

module.exports = router;
