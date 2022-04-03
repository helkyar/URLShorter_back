const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserManager = require(`../${process.env.MANAGER}/UserManager`);

async function checkLogin(req, res) {
  const credentials = req.body.login;
  // Incorrect login___________________________________
  // (!) check status 200
  if (!credentials) {
    res.status(200).json({ error: "nice try" });
  }

  // Search user_______________________________________
  // const user = await UserManager.find(credentials);
  if (!user[0]) {
    return res.status(400).json({ error: "credenciales incorrectas" });
  }

  // Cehck password____________________________________
  // const { login, id, password } = user[0];
  const validPassword = await bcrypt.compare(credentials?.password, password);
  if (!validPassword) {
    return res.status(400).json({ error: "credenciales incorrectas" });
  }

  // Create token________________________________________
  const token = jwt.sign(
    {
      id: req.body,
    },
    process.env.TOKEN_SECRET
  );
  console.log("user", user);
  res.status(200).json({ token, login, id });
}

module.exports = checkLogin;
