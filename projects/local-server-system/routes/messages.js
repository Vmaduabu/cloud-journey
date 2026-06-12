const config = require("../config/config");
const express = require("express");

const {
    getMessages,
    saveMessages
} = require("../db/database");

const router = express.Router();

const requestLogger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

router.use(requestLogger);

router.post("/message", async (req, res) => {

    console.log("POST /message route hit");

    if (
        !req.body ||
        typeof req.body.name !== "string" ||
        typeof req.body.message !== "string"
    ) {
        return res.status(400).json({
            status: "error",
            message: "Name and message must be strings"
        });
    }

    try {
        console.log("loading messages from database");

        const messages = await getMessages();

        const newMessage = {
            id: Date.now(),
            name: req.body.name,
            message: req.body.message,
            timestamp: new Date().toISOString()
        };

        messages.push(newMessage);

        console.log("Saving messages");

        await saveMessages(messages);

        console.log("Sending response");

        return res.status(201).json({
            status: "Message stored",
            data: messages
        });

    } catch (error) {
        console.error("Message Route Error:", error);

        return res.status(500).json({
            status: "error",
            message: "Internal server error"
        });
    }
});

router.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        application: config.appName,
        version: config.version
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

router.get("/error", (req, res) => {
    throw new Error("Simulated server failure");
});

module.exports = router;