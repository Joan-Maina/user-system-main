const connection = require("../configDb");

module.exports = async (req, res) => {
  let { email, password } = req.body;
  let { recordset } = await connection.execute("getuser", { email });

  let user = recordset[0];
  if (password !== user.password)
    return res.send("oops! cannot delete account");
  await connection.execute("deleteuser", { email });
  res.status(201).send("user successfully deleted");
};
