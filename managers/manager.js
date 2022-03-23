const mongoose = require("mongoose");

module.exports = class Manager {
  //(!) Change this object to private variables
  static clientParams = {
    host: process.env.DBHOST,
    name: process.env.DBNAME,
    port: process.env.DBPORT,
  };
  static async connect() {
    const { host, port, name } = this.clientParams;
    mongoose.connect(`mongodb://${host}:${port}/${name}`);
  }
  static async create(schema, params) {
    this.connect();
    try {
      const user = await schema.create({ params });
      return user;
    } catch (error) {
      console.log(error);
    }
  }
};
