const dbconnection = require("../configDb");
const bcrypt = require("bcryptjs");
const jwtgenerate = require("../helpers/token");
const lodash = require("lodash");
module.exports = async (req, res) => {
  try {
    let { email, password } = req.body;
    let { recordset } = await dbconnection.execute("getuser", { email });
    if (recordset[0].email !== email)
      return res.status(400).send("Account does not exist");

    let auth = await bcrypt.compare(password, recordset[0].password);

    if (!auth) return res.status(400).send("Incorrect password provided");

    const token = jwtgenerate({ email, password });
    if (!token)
      return res.status(400).send("Encountered problem generating token.");
    res.send({
      user: lodash.pick(recordset[0], [
        "firstname",
        "lastname",
        "email",
        "isAdmin",
      ]),
      token,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
