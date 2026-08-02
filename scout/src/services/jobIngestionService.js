import scoreJob from "../matching/scoreJob.js";
import preFilterJob from "../matching/preFilterJob.js";
import { notifyAboutJob } from "../notifications/notificationService.js";
import { saveJob } from "./jobService.js";

export async function ingestJobs(jobs) {
  const results = [];

  for (const job of jobs) {
    try {
      const filterResult = preFilterJob(job);

      if (!filterResult.accepted) {
        results.push({
          sourceUrl: job.sourceUrl,
          title: job.title,
          status: "filtered",
          filterReason: filterResult.reason,
        });

        continue;
      }

      const scoringResult = scoreJob(job);
      const savedResult = await saveJob(job, scoringResult);

      let notification = {
        sent: false,
        reason: "Job did not qualify for notification",
      };

      if (
        savedResult.duplicate === false &&
        scoringResult.matchLevel === "strong"
      ) {
        notification = await notifyAboutJob(job, scoringResult);
      }

      results.push({
        sourceUrl: job.sourceUrl,
        title: job.title,
        score: scoringResult.score,
        matchLevel: scoringResult.matchLevel,
        duplicate: savedResult.duplicate,
        notification,
        status: "processed",
      });
    } catch (error) {
      console.error(`Failed to process ${job.sourceUrl}:`, error);

      results.push({
        sourceUrl: job.sourceUrl,
        title: job.title,
        status: "failed",
      });
    }
  }

  return results;
}