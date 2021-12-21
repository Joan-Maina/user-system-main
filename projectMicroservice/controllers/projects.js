const connection = require("../dbconfig");

const registerProject = async (req, res) => {
  try {
    let { projectTitle, projectClient, projectStartdate, projectEnddate } =
      req.body;
    await connection.execute("registerproject", {
      projectTitle,
      projectClient,
      projectStartdate,
      projectEnddate,
    });
    res.send({ message: "project inserted" });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};

const getProjects = async (req, res) => {
  //get email
  let { email } = req.body;
  console.log(email);
  //get project according to email
  let { recordset } = await connection.execute("getprojects", { email });
  if (recordset.length === 0) {
    res.send({ message: "No projects assigned" });
  }
  console.log(recordset);
  res.send(recordset);
};

const getallprojects = async (req, res) => {
  try {
    let { recordset } = await connection.execute("getallprojects");
    res.send(recordset);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

const getProject = async (req, res) => {
  try {
    //get email
    let { email } = req.body;
    console.log(email);
    //get project according to email
    let { recordset } = await connection.execute("getproject", { email });
    res.send(recordset);
  } catch (error) {
    res.send("error occurred");
  }
};
const updateProject = async (req, res) => {
  try {
    let { projectId } = req.body;

    await connection.execute("updateproject"), { projectId };
    res.send({ message: "project successfully updated" });
  } catch (error) {
    res.send(error.message);
  }
};
const assignProject = async (req, res) => {
  try {
    let { email, projectId } = req.body;
    await connection.execute("assignproject", { email, projectId });
    res.send({ message: "project successfully assigned" });
  } catch (error) {
    res.send({ message: error.message });
  }
};
const deleteProject = async (req, res) => {
  try {
    let { projectid } = req.body;
    console.log(projectid);
    await connection.execute("deleteproject", { projectid });
    res.send({ message: "project successfully deleted" });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  registerProject,
  updateProject,
  assignProject,
  getProjects,
  deleteProject,
  getProject,
  getallprojects,
};
