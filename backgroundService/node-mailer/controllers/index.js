const connection = require("../dbconfig");
const ejs = require("ejs");
const { sendMail } = require("../helpers/registrationmessage");
const AfricasTalking = require("africastalking");

// TODO: Initialize Africa's Talking
const africastalking = AfricasTalking({
  apiKey: "0063d2487bb98749ae609e3d398ba04c288bfa959b4dbfe1a01b5d7584765ad7",
  username: "sandbox",
});

const registration = async () => {
  console.log("maina");
  const { recordset } = await connection.query(
    "SELECT phone, isActive FROM [dbo].[phonenumbers] WHERE isActive = 0"
  );
  console.log(recordset);
  if (recordset.length === 0) console.log("joan");
  recordset.map(async (user) => {
    const phone = user.phone;
    // console.log(user);
    const userdetails = await connection.execute("getuserbyphone", { phone });
    const firstname = userdetails.recordset[0].firstname;

    console.log(firstname);
    try {
      const result = await africastalking.SMS.send({
        to: phone,
        message:
          "Hello " +
          firstname +
          ", you have successsfully registered with Joan's user system.",
      });
      await connection.query(
        "UPDATE [dbo].[phonenumbers] SET isActive = 1 WHERE phone = " +
          phone +
          ";"
      );
      console.log(result);
    } catch (ex) {
      console.error(ex);
    }

    // ejs.renderFile(
    //   "templates/registration.ejs",
    //   { name: firstname, email: email },
    //   async (err, data) => {
    //     if (err) return console.log(err);
    //     const message = {
    //       from: {
    //         name: "User SCREATE OR ALTER PROCEDURE [dbo].[getuser]
    //         @email VARCHAR(255)
    //       AS
    //       --reduce traffic
    //       SET NOCOUNT ON;
    //       BEGIN
    //         SELECT firstname, lastname
    //               FROM [dbo].[userDetails]
    //                   WHERE email = @email AND isDeleted = 0
    //       END;ystem",
    //         address: process.env.FROM_EMAIL,
    //       },
    //       to: email,
    //       subject: "Registration Success",
    //       html: data,
    //     };

    //     try {
    //       await sendMail(message);

    //       await connectionemail.query(
    //         "UPDATE [dbo].[emails] set isActive = 1 where email = '" +
    //           email +
    //           "'"
    //       );
    //       console.log(`Registration Email sent to ${email}`);
    //     } catch (error) {
    //       console.log(`Couldn't send email to ${email}`);
    //     }
    //   }
    // );
  });
};

// const projectAssign = async () => {
//   const { recordset } = await connection.query(
//     "SELECT projectLead FROM [dbo].[projectAssignment] WHERE isActive = 0"
//   );
//   if (recordset.length === 0) console.log("joan");
//   recordset.map(async (user) => {
//     const email = user.taskLead;

//     const userdetails = await connection.execute("getuser", { email });
//     const firstname = userdetails.recordset[0].firstname;

//     ejs.renderFile(
//       "templates/assignment.ejs",
//       { name: firstname, email: email },
//       async (err, data) => {
//         if (err) return console.log(err);
//         const message = {
//           from: {
//             name: "User System",
//             address: process.env.FROM_EMAIL,
//           },
//           to: email,
//           subject: "Assignment",
//           html: data,
//         };

//         try {
//           await sendMail(message);

//           await connection.query(
//             "UPDATE [dbo].[emails] set isActive = 1 where email = '" +
//               email +
//               "'"
//           );
//           console.log(`Assignment Email sent to ${email}`);
//         } catch (error) {
//           console.log(`Couldn't send email to ${email}`);
//         }
//       }
//     );
//   });
// };
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
module.exports = { registration, taskAssign };
