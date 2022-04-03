let Manager = require("./Manager");
let Template = require("./models/Template");

class TemplateManager extends Manager {
  table = "templates";
  columns = ["column1", "column2"];

  // Query preparation __________________________________________________________________
  static queries = {
    getAllTemplates: `SELECT * FROM ${this.table}`,
    getTemplate: `SELECT * FROM ${this.table} WHERE id=$1`,
    postTemplate: `INSERT INTO ${this.table} (${[...this.columns]}) VALUES 
                     (${[...this.columnsVariables()]}) RETURNING *;`,
    patchTemplate: `UPDATE ${this.table} SET ${[...this.updateQuery()]}
                      WHERE id = $${this.columns.length + 1} RETURNING *;`,
    deleteTemplate: `DELETE FROM ${this.table} WHERE id=$1`,
  };

  updateQuery() {
    return this.columns.map((col, i) => `${col} = $${i + 1} `);
  }

  columnsVariables() {
    return this.columns.map((c, i) => `$${i + 1}`);
  }

  // Query Execution _______________________________________________________________________
  static async findAll() {
    return await this.queryExec(this.queries.getAllTemplates, Template);
  }

  static async find({ id }) {
    return await this.queryExec(this.queries.getTemplate, Template, [id]);
  }

  static async create({ column1, column2 }) {
    const params = [column1, column2];
    return await this.queryExec(this.queries.postTemplate, Template, params);
  }

  static async update({ id, column1, column2 }) {
    const params = [column1, column2, id];
    return await this.queryExec(this.queries.patchTemplate, Template, params);
  }

  static async delete({ id }) {
    return await this.queryExec(this.queries.deleteTemplate, Template, [id]);
  }
}

module.exports = TemplateManager;
