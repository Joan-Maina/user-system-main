const express = require("express");
const router = express.Router();
// const { tokenvalidate } = require("../middlewares/tokenvalidate");

const {
  getassignedusers,
  getusers,
  updatepassword,
  signup,
  deleteuser,
  login,
} = require("../controllers");

router.post("/signup", signup);
router.post("/login", login);
router.post("/updatepassword", updatepassword);
router.post("/getusers", getusers);
router.post("/getassignedusers", getassignedusers);

router.post("/deleteuser", deleteuser);

module.exports = router;
