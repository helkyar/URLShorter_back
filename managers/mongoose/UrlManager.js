const Manager = require("./Manager");
const schema = require("./schemas/userSchema");

module.exports = class UrlManager extends Manager {
  static async create(url) {
    const params = { urls: url };
    return await this.executeQuery(schema, this.querys.insert, [params]);
  }
  static async find(id) {
    return await this.executeQuery(schema, this.querys.find, [{ urls: id }]);
  }
  static async findAll() {
    return await this.executeQuery(schema, this.querys.findAll);
  }
  static async update(url, { id }) {
    const params = [{ _id: id }, url];
    return await this.executeQuery(schema, this.querys.update, params);
  }
  static async delete({ id }) {
    return await this.executeQuery(schema, this.querys.delete, [{ _id: id }]);
  }
};
