const { verify } = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  let token = req.headers.authorization.split(" ")[1];
  console.log(token);

  if (token) {
    token = token.slice(7);
    verify(token, process.env.SECRET_KEY, (decoded) => {
      if (!decoded) {
        return res.json({
          success: 0,
          message: "invalid token",
        });
      } else {
        next();
      }
    });
  } else {
    return res.json({
      success: 0,
      message: "Access Denied!",
    });
  }
};
