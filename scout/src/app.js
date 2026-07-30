import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import jobsRouter from "./routes/jobs.js";

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

app.use("/jobs", jobsRouter);

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
  });
});

export default app;