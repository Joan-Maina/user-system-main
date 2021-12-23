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
    res.status(201).send({ message: "project inserted" });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};

const getProjects = async (req, res) => {
  try {
    //get email
    let { email } = req.body;
    console.log(email);
    //get project according to email
    let { recordset } = await connection.execute("getprojects", { email });
    if (recordset.length === 0) {
    }
    res.status(201).send(recordset);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getallprojects = async (req, res) => {
  try {
    let { recordset } = await connection.execute("getallprojects");
    res.status(201).send(recordset);
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
    res.status(201).send(recordset);
  } catch (error) {
    res.status(400).send("error occurred");
  }
};
const updateProject = async (req, res) => {
  try {
    let { projectId } = req.body;

    await connection.execute("updateproject"), { projectId };
    res.status(201).send("project successfully updated");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const assignProject = async (req, res) => {
  try {
    let { email, projectId } = req.body;
    await connection.execute("assignproject", { email, projectId });
    res.status(201).send("project successfully assigned");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const deleteProject = async (req, res) => {
  try {
    let { projectid } = req.body;
    console.log(projectid);
    await connection.execute("deleteproject", { projectid });
    res.status(201).send("project successfully deleted");
  } catch (error) {
    res.status(400).send(error.message);
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
