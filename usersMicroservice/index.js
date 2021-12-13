const express = require("express");
const usersRoute = require("./routes");
const cors = require("cors");
// eslint-disable-next-line no-undef
const PORT = process.env.PROJECT_PORT || 9000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", usersRoute);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
