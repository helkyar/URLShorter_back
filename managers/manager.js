const mongoose = require("mongoose");

module.exports = class Manager {
  //(!) Change this object to private variables
  static clientParams = {
    host: process.env.DBHOST,
    name: process.env.DBNAME,
    port: process.env.DBPORT,
  };
  static async queryExec() {
    const { host, port, name } = this.clientParams;
    mongoose.connect(`mongodb://${host}:${port}/${name}`);
  }
};
