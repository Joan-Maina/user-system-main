require("dotenv").config();
const cron = require("node-cron");
const express = require("express");
const path = require("path");
const cors = require("cors");

const { registration, projectAssign } = require("./controllers");

// const run = async () => {
cron.schedule("2  * * * *", () => {
  // console.log("joan");
  registration();
  // registration.run();
});
// cron.schedule("2 * * * * *", async () => {
//   await projectAssign.run();
// });

cron.schedule("2 * * * * *", () => {
  taskAssign();
});
// };

// run();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

var router = express.Router();

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Task runner running on port ${PORT}`));
