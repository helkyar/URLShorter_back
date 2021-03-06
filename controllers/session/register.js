const bcrypt = require("bcrypt");
const { schemaRegister } = require("../../middlewares/validations");
const UserManager = require(`../../${process.env.MANAGER}/UserManager`);

async function register(req, res) {
  let data = req.body;

  // Validation___________________________
  const { error } = schemaRegister.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  // User Creation__________________________
  const salt = await bcrypt.genSalt(10);
  data.password = await bcrypt.hash(data.password, salt);
  const user = await UserManager.create(data);

  user
    ? res.status(200).json(user[0])
    : res.status(400).json({ error: "Wrong format" });
}

module.exports = register;
