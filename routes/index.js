const router = require("express").Router();

router.use("/login", require("./login"));
router.use("/", (req, res) => {
  console.log("index");
  res.status(200).json({ get: "ok" });
});
module.exports = router;
