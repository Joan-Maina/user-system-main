const mssql = require("mssql");
const config = require("./db_config");
require("dotenv").config();
const connection = async () => {
  let pool = null;
  try {
    pool = mssql.connect(config);
    console.log(process.env.MSSQL_SERVER);
  } catch (error) {
    res.status(400).send(error.message);
  }
  return pool;
};
const createRequest = async (request, params) => {
  const keys = Object.keys(params);
  keys.map((keyName) => {
    const keyValue = params[keyName];
    request.input(keyName, keyValue);
  });
  return request;
};
const execution = async (procedureTitle, params = {}) => {
  const requestone = await connection();
  const requesttwo = await requestone.request();
  request = await createRequest(requesttwo, params);
  const results = await request.execute(procedureTitle);
  return results;
};
const querying = async (query) => {
  const requestQuery = await connection();
  const results = await requestQuery.request().query(query);
  return results;
};
module.exports = { query: querying, execute: execution };
