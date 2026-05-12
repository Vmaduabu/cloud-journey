const express = require("express");

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello Cloud Journey");
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Server is running"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});