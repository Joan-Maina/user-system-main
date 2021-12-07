const connection = require("../configDb");

module.exports = async (req, res) => {
  let { email, password } = req.body;
  let { recordset } = await connection.execute("getuser", { email });

  if (email !== recordset[0].email)
    return res.send("oops! cannot delete account");
  await connection.execute("deleteuser", { email });
  res.status(201).send("user successfully deleted");
};
