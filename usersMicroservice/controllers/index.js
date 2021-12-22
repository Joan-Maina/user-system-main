const connection = require("../configDb");
const dbconnection = require("../configDb");
const bcrypt = require("bcryptjs");
const jwtgenerate = require("../helpers/token");
const lodash = require("lodash");
const validate = require('../helpers/validate')
const encrypt = require('../helpers/encrypt')


const deleteuser = async (req, res) => {
  let { email } = req.body;
  // let { recordset } = await connection.execute("getuser", { email });

  // let user = recordset[0];
  console.log(email);
  await connection.execute("deleteuser", { email });
  res.status(201).send("user successfully deleted");
};

const getusers = async (req, res) => {
    let { recordset } = await connection.execute("getallusers");
    // console.log(recordset);
    res.send(recordset);
  };

  const getassignedusers = async (req, res) => {
    try {
     let ({recordset}) = await connection.execute("getassignedusers");
      res.send(recordset)
    } catch (error) {
      res.status(400).send(error.message)
    }
    
  };
  const login = async (req, res) => {
    try {
      let { email, password } = req.body;
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
  const signup = async (req, res) => {
    try {
      //get user input
      const { firstname, lastname, email, password, confirmpassword } = req.body;
  
      //compare password and confirmpassword
      if (password !== confirmpassword)
        return res.status(401).send({ message: "Passwords do not match" });
  
      const { error } = await validate({
        firstname,
        lastname,
        email,
        password,
        confirmpassword,
      });
  
      if (error) return res.status(401).send(error.message);
      //check if user has the email provided
      let { recordset } = await dbconnection.execute("getuser", { email });
  
      if (recordset.length !== 0)
        return res.status(401).send({ message: "Account already exists" });
      //encrypt password and register user
      const pass = await encrypt(password);
      console.log(pass);
      await dbconnection.execute("registeruser", {
        firstname,
        lastname,
        email,
        pass,
      });
      res.status(201).send({ message: "Successfully registered" });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Error");
    }
  };
  
  const updatepassword  = async (req, res) => {
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
  
  module.exports = {
      getusers,
      getassignedusers,
      updatepassword,
      signup,
      login,
      deleteuser
  }