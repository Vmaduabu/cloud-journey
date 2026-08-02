import cron from "node-cron";
import { ingestGreenhouseBoard } from "../services/greenhouseIngestionService.js";

const greenhouseBoards = [
  {
    boardToken: "appian",
    company: "Appian",
  },
];

async function runJobScan() {
  console.log(`[Scout] Starting scheduled scan at ${new Date().toISOString()}`);

  for (const board of greenhouseBoards) {
    try {
      const ingestion = await ingestGreenhouseBoard(board);

      const processed = ingestion.results.filter(
        (result) => result.status === "processed"
      ).length;

      const filtered = ingestion.results.filter(
        (result) => result.status === "filtered"
      ).length;

      const newJobs = ingestion.results.filter(
        (result) =>
          result.status === "processed" &&
          result.duplicate === false
      ).length;

      const notificationsSent = ingestion.results.filter(
        (result) => result.notification?.sent === true
      ).length;

      console.log(
        `[Scout] ${board.company}: fetched=${ingestion.fetched}, ` +
        `processed=${processed}, filtered=${filtered}, ` +
        `newJobs=${newJobs}, notifications=${notificationsSent}`
      );
    } catch (error) {
      console.error(
        `[Scout] Failed to scan ${board.company}:`,
        error
      );
    }
  }

  console.log("[Scout] Scheduled scan completed.");
}

export function startJobScanScheduler() {
    cron.schedule(
        "0 8,13,18 * * *",
        runJobScan,
        {
            timezone: "America/Chicago",
            noOverlap: true,
            name: "scout-greenhouse-scan",
        }
    );

    console.log(
        "[Scout] Scheduler strated: scans 8 AM, 1 PM, and 6 PM Central."
    );
}


export { runJobScan };