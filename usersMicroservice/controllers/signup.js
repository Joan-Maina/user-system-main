const dbconnection = require("../configDb");
const encrypt = require("../helpers/encrypt");
const validate = require("../helpers/validate");
module.exports = async (req, res) => {
  try {
    //get user input
    const { firstname, lastname, email, password, confirmpassword } = req.body;

    //compare password and confirmpassword
    if (password !== confirmpassword)
      return res.status(400).send({ message: "Passwords do not match" });

    const { error } = await validate({
      firstname,
      lastname,
      email,
      password,
      confirmpassword,
    });

    if (error) return res.status(400).send(error.message);
    //check if user has the email provided
    let { recordset } = await dbconnection.execute("getuser", { email });
    console.log(recordset.length);
    if (recordset.length !== 0)
      return res.status(400).send("Account already exists");
    //encrypt password and register user
    const pass = await encrypt(password);
    console.log(pass);
    await dbconnection.execute("registeruser", {
      firstname,
      lastname,
      email,
      pass,
    });
    res.send("Successfully registered");
  } catch (error) {
    console.log(error.message);
  }
};
