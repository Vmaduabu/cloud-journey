const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

const messageRoutes = require("./routes/messages");

// Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});

app.use(messageRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("Hello Cloud Journey");
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Server is running"
  });
});

app.get("/about", (req, res) => {
  res.send("Learning backend systems and Azure infrastructure");
});

app.get("/profile", (req, res) => {
  res.json({
    name: "John Stewart",
    major: "Information Technology",
    focus: "Azure Infrastructure"
  });
});

app.get("/greet", (req, res) => {
  const name = req.query.name;

  res.send(`Hello ${name}`);
});

app.get("/config", (req, res) => {
  res.json({
    port: process.env.PORT,
    app: process.env.APP_NAME
  });
});

app.get("/error-test", (req, res) => {
  res.status(500).json({
    status: "error",
    message: "Internal server error simulation"
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});