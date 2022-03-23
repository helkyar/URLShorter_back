const Manager = require("./Manager");
const schema = require("./schemas/userSchema");

module.exports = class UserManager extends Manager {
  static async postUsers(user) {
    // (!) Correct hereditary check
    console.log(this.querys.save);
    return await executeQuery(schema, user, this.querys.save);
  }
};
