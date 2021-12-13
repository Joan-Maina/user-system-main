const express = require("express");
const router = express.Router();
const signupController = require("../controllers/signup");
const loginController = require("../controllers/login");
const updateController = require("../controllers/updatepassword");
const getusersController = require("../controllers/getusers");
const tokenvalidate = require("../middlewares/tokenvalidate");
const deleteController = require("../controllers/deleteuser");

router.post("/signup", signupController);
router.post("/login", loginController);
router.post("/updatepassword", tokenvalidate, updateController);
router.post("/getusers", tokenvalidate, getusersController);
router.post("/deleteuser", deleteController);

module.exports = router;
