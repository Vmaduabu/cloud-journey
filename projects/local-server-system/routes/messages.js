const express = require("express");

const router = express.Router();

const messages = [];

router.post("/message", (req, res) => {
  if (!req.body || !req.body.name || !req.body.message) {
    return res.status(400).json({
      status: "error",
      message: "Name and message are required"
    });
  }

  messages.push(req.body);

  res.status(201).json({
    status: "Message stored",
    data: messages
  });
});

router.get("/messages", (req, res) => {
  res.json(messages);
});

module.exports = router;