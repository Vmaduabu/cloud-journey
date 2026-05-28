const fs = require("fs");

function getMessages() {
  return JSON.parse(
    fs.readFileSync("./data/messages.json")
  );
}

function saveMessages(messages) {
  fs.writeFileSync(
    "./data/messages.json",
    JSON.stringify(messages, null, 2)
  );
}

module.exports = {
  getMessages,
  saveMessages
};