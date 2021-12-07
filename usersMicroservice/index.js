const express = require("express");
const usersRoute = require("./routes");
const PORT = process.env.PORT || 9000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", usersRoute);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
