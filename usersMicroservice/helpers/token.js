const jwt = require("jsonwebtoken");

require("dotenv").config();

module.exports = ({ email, password }) => {
  let token = jwt.sign({ email, password }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });
  return token;
};
