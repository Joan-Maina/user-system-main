const cors = require("cors");
const express = require("express");
const projectRoutes = require("./routes/Projects");
const taskRoutes = require("./routes/Tasks");
const PORT = 8088;

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/projects", projectRoutes);
app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Projects running ${PORT}`);
});
