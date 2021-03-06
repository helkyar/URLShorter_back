const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { schemaLogin } = require("../../middlewares/validations");
const UserManager = require(`../../${process.env.MANAGER}/UserManager`);

async function checkLogin(req, res) {
  const credentials = req.body;

  // Validation______________________________________
  const { error } = schemaLogin.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  // Search user_______________________________________
  const user = await UserManager.findName(credentials);

  if (!user || !user[0]) {
    return res.status(400).json({ error: "credenciales incorrectas" });
  }

  // Cehck password____________________________________
  const { username, id, password } = user[0];
  const validPassword = await bcrypt.compare(credentials?.password, password);
  if (!validPassword) {
    return res.status(400).json({ error: "credenciales incorrectas" });
  }

  // Create token________________________________________
  const token = jwt.sign({ id, username }, process.env.TOKEN_SECRET);
  res.status(200).json({ token, username, id });
}

module.exports = checkLogin;
