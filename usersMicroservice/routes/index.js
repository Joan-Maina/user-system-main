const express = require("express");
const router = express.Router();
// const { tokenvalidate } = require("../middlewares/tokenvalidate");

const {
  getassignedusers,
  getusers,
  updatepassword,
  signup,
  deleteuser,
  getunassignedusers,
  login,
} = require("../controllers");

router.post("/signup", signup);
router.post("/login", login);
router.post("/updatepassword", updatepassword);
router.post("/getusers", getusers);
router.post("/getassignedusers", getassignedusers);
router.get("/getunassignedusers", getunassignedusers);

router.post("/deleteuser", deleteuser);

module.exports = router;
