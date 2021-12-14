const connection = require("../dbconfig");
const ejs = require("ejs");
const { sendMail } = require("../helpers/registrationmessage");

const registration = async () => {
  const { recordset } = await connection.query(
    "SELECT email, isActive FROM [dbo].[emails] WHERE isActive = 0"
  );
  if (recordset.length === 0) console.log("joan");
  recordset.map(async (user) => {
    const email = user.email;
    // console.log(user);
    const userdetails = await connection.execute("getuser", { email });
    const firstname = userdetails.recordset[0].firstname;

    ejs.renderFile(
      "templates/registration.ejs",
      { name: firstname, email: email },
      async (err, data) => {
        if (err) return console.log(err);
        const message = {
          from: {
            name: "User System",
            address: process.env.FROM_EMAIL,
          },
          to: email,
          subject: "Registration Success",
          html: data,
        };

        try {
          await sendMail(message);

          await connection.query(
            "UPDATE [dbo].[emails] set isActive = 1 where email = '" +
              email +
              "'"
          );
          console.log(`Registration Email sent to ${email}`);
        } catch (error) {
          console.log(`Couldn't send email to ${email}`);
        }
      }
    );
  });
};

const projectAssign = async () => {
  const { recordset } = await connection.query(
    "SELECT projectLead FROM [dbo].[projectAssignment] WHERE isActive = 0"
  );
  if (recordset.length === 0) console.log("joan");
  recordset.map(async (user) => {
    const email = user.taskLead;

    const userdetails = await connection.execute("getuser", { email });
    const firstname = userdetails.recordset[0].firstname;

    ejs.renderFile(
      "templates/assignment.ejs",
      { name: firstname, email: email },
      async (err, data) => {
        if (err) return console.log(err);
        const message = {
          from: {
            name: "User System",
            address: process.env.FROM_EMAIL,
          },
          to: email,
          subject: "Assignment",
          html: data,
        };

        try {
          await sendMail(message);

          await connection.query(
            "UPDATE [dbo].[emails] set isActive = 1 where email = '" +
              email +
              "'"
          );
          console.log(`Assignment Email sent to ${email}`);
        } catch (error) {
          console.log(`Couldn't send email to ${email}`);
        }
      }
    );
  });
};
const taskAssign = async () => {
  const { recordset } = await connection.query(
    "SELECT taskLead FROM [dbo].[taskAssignment] WHERE isActive = 0"
  );
  if (recordset.length === 0) console.log("joan");
  recordset.map(async (user) => {
    const email = user.taskLead;

    const userdetails = await connection.execute("getuser", { email });
    const firstname = userdetails.recordset[0].firstname;

    ejs.renderFile(
      "templates/assignment.ejs",
      { name: firstname, email: email },
      async (err, data) => {
        if (err) return console.log(err);
        const message = {
          from: {
            name: "User System",
            address: process.env.FROM_EMAIL,
          },
          to: email,
          subject: "Assignment",
          html: data,
        };

        try {
          await sendMail(message);

          await connection.query(
            "UPDATE [dbo].[emails] set isActive = 1 where email = '" +
              email +
              "'"
          );
          console.log(`Assignment Email sent to ${email}`);
        } catch (error) {
          console.log(`Couldn't send email to ${email}`);
        }
      }
    );
  });
};
module.exports = { registration, projectAssign, taskAssign };
