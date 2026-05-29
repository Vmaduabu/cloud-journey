const express = require("express");

const {
    getMessages,
    saveMessages
} = require("../db/database");

const router = express.Router();

router.post("/message", async (req, res) => {
    if (!req.body || !req.body.name || !req.body.message) {
        return res.status(400).json({
            status: "error",
            message: "Name and message are required"
        });
    }

    const messages = await getMessages();

    const newMessages = {
        id: Date.now(),
        name: req.body.name,
        message: req.body.message
    };

    messages.push(newMessages);

    await saveMessages(messages);

    res.status(201).json({
        status: "Message stored",
        data: messages
    });
});

router.get("/messages", async (req, res) => {
    const messages = await getMessages();

    res.json(messages);
});

router.delete("/message/:id", async (req, res) => {
  const messages = await getMessages();

  const filteredMessages = messages.filter(
    message => message.id !== Number(req.params.id)
  );

  await saveMessages(filteredMessages);

  res.json({
    status: "deleted"
  });
});

module.exports = router;