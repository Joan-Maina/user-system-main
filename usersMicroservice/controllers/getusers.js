const connection = require("../configDb");
module.exports = async (req, res) => {
  console.log("joan");
  let { recordset } = await connection.execute("getallusers");
  res.send(recordset[0]);
};
