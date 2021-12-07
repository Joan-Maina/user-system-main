const connection = require("../configDb");
module.exports = async (req, res) => {
  let { recordset } = await connection.execute("getallusers");
  res.send(recordset[0]);
};
