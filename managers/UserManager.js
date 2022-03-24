const Manager = require("./Manager");
const schema = require("./schemas/userSchema");

module.exports = class UserManager extends Manager {
  static async postUsers(user) {
    return await this.executeQuery(schema, user, this.querys.save);
  }
};
