const Manager = require("./manager");
const Schema = require("./schemas/UserSchema");

module.exports = class UserManager extends Manager {
  async create() {
    const user = await Schema.create({});
  }
};
