/* eslint-disable no-undef */
require("dotenv").config();
const mssql = require("mssql");

const config = {
  server: process.env.MSSQL_SERVER,
  port: 1433,
  user: process.env.MSSQL_USER,
  password: process.env.MSSQL_PASSWORD,
  database: process.env.MSSQL_DATABASE,
  options: {
    enableArithAbort: true,
    trustServerCertificate: true,
  },
  connectionTimeout: 150000,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
};
mssql
  .connect(config)
  .then((pool) => {
    if (pool.connecting) {
      console.log("connecting to db");
    }
    if (pool.connected) {
      console.log("connected");
    }
  })
  .catch((e) => {
    console.log(e.message);
  });
module.exports = config;
