const express = require("express");
const router = express.Router();

const {
  registerTask,
  updateTask,
  assignTask,
  getTasks,
  deleteTask,
  getalltasks,
} = require("../controllers/tasks");

router.post("/getprojecttasks", getTasks);
router.post("/registertask", registerTask);
router.post("/assigntask", assignTask);
router.post("/deletetask", deleteTask);
router.post("/updatetask", updateTask);
router.get("/getalltasks", getalltasks);

module.exports = router;
