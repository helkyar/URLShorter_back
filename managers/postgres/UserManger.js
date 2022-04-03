let Manager = require("./Manager");
let User = require("./models/User");

class UserManager extends Manager {
  table = "users";
  columns = ["username", "password"];

  // Query preparation __________________________________________________________________
  static queries = {
    getAllUsers: `SELECT * FROM ${this.table}`,
    getUser: `SELECT * FROM ${this.table} WHERE id=$1`,
    getUserlogin: `SELECT * FROM ${this.table} WHERE login=$1`,
    postTemplate: `INSERT INTO ${this.table} (${[...this.columns]}) VALUES 
                     (${[...this.columnsVariables()]}) RETURNING *;`,
    patchTemplate: `UPDATE ${this.table} SET ${[...this.updateQuery()]}
                      WHERE id = $${this.columns.length + 1} RETURNING *;`,
    deleteUser: `DELETE FROM ${this.table} WHERE id=$1`,
  };

  updateQuery() {
    return this.columns.map((col, i) => `${col} = $${i + 1} `);
  }

  columnsVariables() {
    return this.columns.map((c, i) => `$${i + 1}`);
  }

  // Query Execution _______________________________________________________________________
  static async find({ id }) {
    return await this.queryExec(this.queries.getUser, User, [id]);
  }

  static async findName({ login }) {
    return await this.queryExec(this.queries.getUserlogin, User, [login]);
  }

  static async findAll() {
    return await this.queryExec(this.queries.getAllUsers, User);
  }

  static async create({ username, password }) {
    const params = [username, password];
    return await this.queryExec(this.queries.postUser, User, params);
  }

  static async update({ id, username, password }) {
    const params = [username, password, id];
    return await this.queryExec(this.queries.patchUser, User, params);
  }

  static async delete({ id }) {
    return await this.queryExec(this.queries.deleteUser, User, [id]);
  }
}

module.exports = UserManager;
