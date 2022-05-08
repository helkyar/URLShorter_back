const Manager = require("./Manager");
const schema = require("./schemas/urlSchema");

module.exports = class UrlManager extends Manager {
  static async create(url) {
    return await this.executeQuery(schema, this.querys.insert, [url]);
  }
  static async find({ id }) {
    return await this.executeQuery(schema, this.querys.find, [{ _id: id }]);
  }
  static async findValue(value) {
    return await this.executeQuery(schema, this.querys.find, [value]);
  }

  static async findAllOf(value) {
    return await this.executeQuery(schema, this.querys.findAll, [value]);
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
