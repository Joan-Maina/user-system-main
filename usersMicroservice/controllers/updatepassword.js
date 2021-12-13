const connection = require("../configDb");
const encryptPassword = require("../helpers/encrypt");
const bcrypt = require("bcryptjs");
module.exports = async (req, res) => {
  try {
    let { firstname, lastname, email, password } = req.body;

    let { recordset } = await connection.execute("getuser", { email });
    let user = recordset[0];
    let auth = await bcrypt.compare(password, user.password);
    if (firstname !== user.firstname || lastname !== user.lastname)
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
