const dbconnection = require("../configDb");
const bcrypt = require("bcryptjs");
const jwtgenerate = require("../helpers/token");
const lodash = require("lodash");

module.exports = async (req, res) => {
  try {
    let { email, password } = req.body;
    console.log(email);
    let { recordset } = await dbconnection.execute("getuser", { email });

    let user = recordset[0];
    if (!user)
      // if (recordset.length !== 1)
      return res.send({ message: "Account does not exist" });

    let auth = await bcrypt.compare(password, user.password);

    if (!auth) return res.send({ message: "Incorrect password provided" });

    const token = jwtgenerate({ email, password });
    if (!token) return res.send("Encountered problem generating token.");
    res.send({
      user: lodash.pick(user, ["firstname", "lastname", "email", "isAdmin"]),
      token,
    });
  } catch (error) {
    res.send(error);
  }
};
