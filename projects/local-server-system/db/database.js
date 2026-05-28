const fs = require("fs").promises;

async function getMessages() {
    const data = await fs.readFile(
        "./data/messages.json",
        "utf8"
    );

    return JSON.parse(data);
}

async function saveMessages(messages) {
    await fs.writeFile(
        "./data/messages.json",
        JSON.stringify(messages, null, 2)
    );
}

module.exports = {
    getMessages,
    saveMessages
};
