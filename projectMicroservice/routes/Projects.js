const express = require("express");
const router = express.Router();
const {
  getProject,
  getProjects,
  registerProject,
  updateProject,
  deleteProject,
  assignProject,
  getallprojects,
  getcompleteprojects,
} = require("../controllers/projects");
const auth = require("../middlewares/tokenvalidate");

router.post("/getprojects", auth, getProjects);
router.post("/deleteproject", deleteProject);
router.post("/getproject", getProject);
router.post("/registerproject", registerProject);
router.post("/updateproject", updateProject);
router.get("/getallprojects", auth, getallprojects);
router.post("/assignproject", assignProject);
router.get("/completedprojects", getcompleteprojects);
module.exports = router;
