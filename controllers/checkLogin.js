const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserManager = require("../managers/UserManager");

async function checkLoginController(req, res) {
  console.log("login");
  // const user = await UserManager.find({ user: "juan" });
  const token = jwt.sign(
    {
      id: req.body,
    },
    process.env.TOKEN_SECRET
  );
  console.log("user", user);
  res.status(200).json({ token });
}

module.exports = checkLoginController;
