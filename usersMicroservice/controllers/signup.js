const dbconnection = require("../configDb");
const encrypt = require("../helpers/encrypt");
const validate = require("../helpers/validate");
module.exports = async (req, res) => {
  try {
    //get user input
    const { firstname, lastname, email, password, confirmpassword } = req.body;

    //compare password and confirmpassword
    if (password !== confirmpassword)
      return res.send({ message: "Passwords do not match" });

    const { error } = await validate({
      firstname,
      lastname,
      email,
      password,
      confirmpassword,
    });

    if (error) return res.send(error.message);
    //check if user has the email provided
    let { recordset } = await dbconnection.execute("getuser", { email });

    if (recordset.length !== 0)
      return res.send({ message: "Account already exists" });
    //encrypt password and register user
    const pass = await encrypt(password);
    console.log(pass);
    await dbconnection.execute("registeruser", {
      firstname,
      lastname,
      email,
      pass,
    });
    res.send({ message: "Successfully registered" });
  } catch (error) {
    console.log(error.message);
  }
};
