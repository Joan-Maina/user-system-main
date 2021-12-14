const connection = require("../dbconfig");

const registerTask = async (req, res) => {
  let { taskTitle, projectId, taskStartdate, taskEnddate } = req.body;
  await connection.execute("registertask", {
    taskTitle,
    projectId,
    taskStartdate,
    taskEnddate,
  });
};

const getTasks = async (req, res) => {
  try {
    let { email } = req.body;

    let { recordset } = await connection.execute("gettaskassigned", { email });
    if (recordset.length === 0) {
      res.send({ message: "No tasks have been assigned to you" });
    }
  } catch (error) {
    res.send(error.message);
  }
};

const updateTask = async (req, res) => {
  try {
    let { taskId } = req.body;

    await connection.execute("updatetask", { taskId });
    res.send({ message: "task successfully updated." });
  } catch (error) {
    res.send(error.message);
  }
};
const assignTask = async (req, res) => {
  try {
    let { email, taskId } = req.body;
    await connection.execute("assigntask", { email, taskId });
    res.send({ message: "task successfully assigned" });
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    let { taskId } = req.body;

    await connection.execute("deletetask", { taskId });
    res.send({ message: "task successfully deleted." });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  registerTask,
  updateTask,
  assignTask,
  getTasks,
  deleteTask,
  assignTask,
};
