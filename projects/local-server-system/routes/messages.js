const express = require("express");
const fs = require("fs");

const router = express.Router();

const messages = JSON.parse(
  fs.readFileSync("./data/messages.json")
);

router.post("/message", (req, res) => {
  if (!req.body || !req.body.name || !req.body.message) {
    return res.status(400).json({
      status: "error",
      message: "Name and message are required"
    });
  }

  messages.push(req.body);

  fs.writeFileSync(
    "./data/messages.json",
    JSON.stringify(messages, null, 2)
  );

  res.status(201).json({
    status: "Message stored",
    data: messages
  });
});

router.get("/messages", (req, res) => {
  res.json(messages);
});

module.exports = router;