import cron from "node-cron";
import { runJobScan } from "../services/jobScanService.js";

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
    "[Scout] Scheduler started: scans at 8 AM, 1 PM, and 6 PM Central."
  );
}