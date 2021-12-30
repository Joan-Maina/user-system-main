const AfricasTalking = require("africastalking");

// TODO: Initialize Africa's Talking
const africastalking = AfricasTalking({
  apiKey: "0063d2487bb98749ae609e3d398ba04c288bfa959b4dbfe1a01b5d7584765ad7",
  Kawirausername: "sandbox",
});
module.exports = async function sendSMS() {
  // TODO: Send message

  try {
    const result = await africastalking.SMS.send({
      to: "+254712632595",
      message: "Hey AT Ninja! Wassup...",
    });
    console.log("jo");
    console.log(result);
  } catch (ex) {
    console.error(ex);
  }
};
