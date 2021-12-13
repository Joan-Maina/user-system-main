const express = require("express");
const router = express.Router();
const { getProject, getProjects, getTasks } = require("../controllers/fetch");
const { registerProject, registerTask } = require("../controllers/insert");
const { updateProject } = require("../controllers/update");

router.post("/getprojects", getProjects);
router.post("/getproject", getProject);
router.post("/getassignedtasks", getTasks);
router.post("/registerproject", registerProject);
router.post("/registertask", registerTask);
router.post("/updateproject", updateProject);

module.exports = router;
