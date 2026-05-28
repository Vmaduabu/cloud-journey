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

    messages.push(req.body);

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

module.exports = router;