import jobBoards from "../config/jobBoards.js";
import { ingestGreenhouseBoard } from "./greenhouseIngestionService.js";

export async function runJobScan() {
  console.log(
    `[Scout] Starting job scan at ${new Date().toISOString()}`
  );

  const boardResults = [];

  for (const board of jobBoards) {
    try {
      if (board.source !== "greenhouse") {
        throw new Error(`Unsupported job source: ${board.source}`);
      }

      const ingestion = await ingestGreenhouseBoard({
        boardToken: board.boardToken,
        company: board.company,
      });

      const summary = {
  company: board.company,
  fetched: ingestion.fetched,

  processed: ingestion.results.filter(
    (result) => result.status === "processed"
  ).length,

  filtered: ingestion.results.filter(
    (result) => result.status === "filtered"
  ).length,

  failed: ingestion.results.filter(
    (result) => result.status === "failed"
  ).length,

  newJobs: ingestion.results.filter(
    (result) =>
      result.status === "processed" &&
      result.duplicate === false
  ).length,

  duplicates: ingestion.results.filter(
    (result) =>
      result.status === "processed" &&
      result.duplicate === true
  ).length,

  notificationsSent: ingestion.results.filter(
    (result) => result.notification?.sent === true
  ).length,
};
           boardResults.push({
        status: "completed",
        ...summary,
      });

      console.log(
        `[Scout] ${board.company}: ` +
          `fetched=${summary.fetched}, ` +
          `processed=${summary.processed}, ` +
          `filtered=${summary.filtered}, ` +
          `newJobs=${summary.newJobs}, ` +
          `notifications=${summary.notificationsSent}`
      );

          } catch (error) {
      console.error(
        `[Scout] Failed to scan ${board.company}:`,
        error
      );

      boardResults.push({
        company: board.company,
        status: "failed",
        error: error.message,
      });
    }
  }

  console.log("[Scout] Job scan completed.");

  return boardResults;
}