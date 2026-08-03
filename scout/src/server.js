import "dotenv/config";
import app from "./app.js";
import { startJobScanScheduler } from "./scheduler/jobScanScheduler.js";

const port = Number(process.env.PORT) || 3000;

const server = app.listen(port, () => {
  console.log(`Scout server running at http://localhost:${port}`);
});

if (process.env.ENABLE_LOCAL_SCHEDULER === "true") {
  startJobScanScheduler();
} else {
  console.log("[Scout] Local scheduler disabled.");
}

function shutdown(signal) {
  console.log(`${signal} received. Shutting down Scout...`);

  server.close((error) => {
    if (error) {
      console.error("Error shutting down server:", error);
      process.exit(1);
    }

    console.log("Scout stopped successfully.");
    process.exit(0);
  });
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));