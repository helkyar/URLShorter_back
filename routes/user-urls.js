const router = require("express").Router();

router.patch("/update/:id", require("../controllers/user-urls/patchUserUrl"));
router.get("/:id", require("../controllers/user-urls/getUserUrls"));
router.delete("/delete/:id", require("../controllers/user-urls/delUserUrl"));

module.exports = router;
