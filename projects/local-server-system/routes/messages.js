const express = require("express");

const router = express.Router();

const messages = [];

router.post("/message", (req, res) => {
    messages.push(req.body);

    res.json({
        status: "Message stored",
        data: messages
    });
});

router.get("/messages", (req, res) => {
    res.json(messages);
});

module.exports = router;