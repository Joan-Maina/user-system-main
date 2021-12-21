const connection = require("../dbconfig");

const registerTask = async (req, res) => {
  try {
    let { taskTitle, projectId, taskStartdate, taskEnddate } = req.body;
    console.log(taskTitle);
    await connection.execute("registertask", {
      taskTitle,
      projectId,
      taskStartdate,
      taskEnddate,
    });
  } catch (error) {
    res.send(error);
  }
};

const getTasks = async (req, res) => {
  try {
    let { id } = req.body;
    console.log(id);
    let { recordset } = await connection.execute("gettasksinproject", {
      id,
    });
    console.log(recordset);
    if (recordset.length === 0)
      return res.send({ message: "No tasks in this project" });

    res.send(recordset);
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
    res.send(error.message);
  }
};

const deleteTask = async (req, res) => {
  try {
    console.log("jo");
    let { taskId } = req.body;
    console.log(taskId);
    await connection.execute("deletetask", { taskId });
    res.send({ message: "task successfully deleted." });
  } catch (error) {
    res.send(error.message);
  }
};
const getalltasks = async (req, res) => {
  try {
    let { recordset } = await connection.execute("getalltasks");
    res.send(recordset);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  registerTask,
  updateTask,
  assignTask,
  getTasks,
  deleteTask,
  assignTask,
  getalltasks,
};
