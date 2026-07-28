const express = require("express");
const cors = require("cors")
const helmet = require("helmet")
const morgan = require("morgan")

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy",
        service: "scout",
        timestamp: new Date().toISOString(),
    });
});

app.use((req, res) => {
    res.status(404).json({
        error: "Route not found",
    });
});

module.exports = app;