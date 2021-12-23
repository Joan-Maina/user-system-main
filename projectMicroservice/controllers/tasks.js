const { connect } = require("mssql");
const connection = require("../dbconfig");

const registerTask = async (req, res) => {
  try {
    let { taskTitle, projectId, taskStartdate, taskEnddate } = req.body;
    await connection.execute("registertask", {
      taskTitle,
      projectId,
      taskStartdate,
      taskEnddate,
    });
    res.status(201).send({ message: "task successfully registered" });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getTasks = async (req, res) => {
  try {
    let { id } = req.body;
    console.log(id);
    let { recordset } = await connection.execute("gettasksinproject", {
      id,
    });
    if (recordset.length === 0)
      return res.status(201).send({ message: "No tasks in this project" });

    res.status(201).send(recordset);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const getassignedtasks = async (req, res) => {
  try {
    let { email } = req.body;
    let { recordset } = await connection.execute("getassignedtasks", { email });
    res.status(201).send(recordset);
  } catch (error) {
    res.status(201).send(error.message);
  }
};

const updateTask = async (req, res) => {
  try {
    let { taskid } = req.body;
    // const taskid = taskId;
    console.log(taskid);
    await connection.execute("updatetask", { taskid });
    res.status(201).send({ message: "task successfully updated." });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const assignTask = async (req, res) => {
  try {
    let { email, taskId } = req.body;
    const taskid = taskId;
    await connection.execute("assigntask", { taskid, email });
    res.status(201).send({ message: "task successfully assigned" });
  } catch (error) {
    res.status(2400).send(error.message);
  }
};

const deleteTask = async (req, res) => {
  try {
    console.log("jo");
    let { taskId } = req.body;
    console.log(taskId);
    await connection.execute("deletetask", { taskId });
    res.status(201).send({ message: "task successfully deleted." });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const getalltasks = async (req, res) => {
  try {
    let { recordset } = await connection.execute("getalltasks");
    res.status(201).send(recordset);
  } catch (error) {
    res.status(400).status(400).send(error.message);
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
  getassignedtasks,
};
