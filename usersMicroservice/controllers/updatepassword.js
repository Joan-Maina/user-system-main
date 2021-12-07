const connection = require("../configDb");
const encryptPassword = require("../helpers/encrypt");
const bcrypt = require("bcryptjs");
module.exports = async (req, res) => {
  try {
    let { firstname, lastname, email, password } = req.body;

    let { recordset } = await connection.execute("getuser", { email });
    let auth = await bcrypt.compare(password, recordset[0].password);
    if (
      firstname !== recordset[0].firstname ||
      lastname !== recordset[0].lastname ||
      email !== recordset[0].email
    )
      return res.status(400).send("Wrong inputs");
    if (auth) return res.status(400).send("Choose a different password");

    let pass = await encryptPassword(password);

    await connection.execute("updatepassword", {
      email: email,
      password: pass,
    });
    res.send("user updated");
  } catch (error) {
    res.status(202).send("Error occurred");
  }
};
