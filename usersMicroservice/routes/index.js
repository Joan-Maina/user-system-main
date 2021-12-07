const express = require("express");
const signupController = require("../controllers/signup");
const router = express.Router();
const loginController = require("../controllers/login");
const updateController = require("../controllers/updatepassword");
const getusersController = require("../controllers/getusers");
const tokenvalidate = require("../middlewares/tokenvalidate");

router.post("/signup", signupController);
router.post("/login", loginController);
router.post("/updatepassword", tokenvalidate, updateController);
router.post("/getusers", tokenvalidate, getusersController);

module.exports = router;
