const { urlencoded } = require("body-parser");
const express = require("express");
const projectRoutes = require("./routes");
const PORT = process.env.PROJECT_PORT || 8088;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/projects", projectRoutes);

app.listen(PORT, () => {
  console.log(`Projects running ${PORT}`);
});
