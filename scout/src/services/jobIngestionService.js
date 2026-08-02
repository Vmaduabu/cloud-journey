import scoreJob from "../matching/scoreJob.js";
import { saveJob } from "./jobService.js";

export async function ingestJobs(jobs) {
    const results = [];

    for (const job of jobs) {
      try {
        const scoringResult = scoreJob(job);
        const savedResult = await saveJob(job, scoringResult);

        results.push({
            sourceUrl: job.sourceUrl,
            title: job.title,
            matchlevel: scoringResult.matchLevel,
            duplicate: savedResult.duplicate,
            status: "processed",
        });
      } catch (error) {
        console.error(`Failed to process ${job.sourceUrl}:`, error);

        result.push({
            sourceUrl: job.sourceUrl,
            title: job.title,
            status: "failed",
        });
      }
    }

    return results;
}