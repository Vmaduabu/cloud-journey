const express = require("express");

const {
  getMessages,
  saveMessages
} = require("../db/database");

const router = express.Router();

router.post("/message", (req, res) => {
  if (!req.body || !req.body.name || !req.body.message) {
    return res.status(400).json({
      status: "error",
      message: "Name and message are required"
    });
  }

  const messages = getMessages();

  messages.push(req.body);

  saveMessages(messages);

  res.status(201).json({
    status: "Message stored",
    data: messages
  });
});

router.get("/messages", (req, res) => {
  const messages = getMessages();

  res.json(messages);
});

module.exports = router;