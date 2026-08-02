import express from "express";
import scoreJob from "../matching/scoreJob.js";
import { saveJob } from "../services/jobService.js";
import sampleJobs from "../sources/sampleJobs.js";
import { ingestJobs } from "../services/jobIngestionService.js";

const router = express.Router();

router.post("/score", async (req, res) => {
  try {
    const {
      title,
      company,
      location,
      description,
      sourceUrl,
    } = req.body;

    if (!title || !company || !description || !sourceUrl) {
      return res.status(400).json({
        error:
          "title, company, description, and sourceUrl are required",
      });
    }

    const scoringResult = scoreJob({
      title,
      company,
      location,
      description,
    });

    const result = await saveJob(
      {
        title,
        company,
        location,
        description,
        sourceUrl,
      },
      scoringResult
    );

    return res.status(result.duplicate ? 200 : 201).json({
      duplicate: result.duplicate,
      job: result.job,
      reasons: scoringResult.reasons,
    });
  } catch (error) {
    console.error("Failed to score and save job:", error);

    return res.status(500).json({
      error: "Failed to score and save job",
    });
  }
});

router.post("/ingest-samples", async (req, res) => {
  try {
    const results = await ingestJobs(sampleJobs);

    const summary = {
      total: results.length,
      processed: results.filter((result) => result.status === "processed").length,
      failed: results.filter((result) => result.status === "failed").length,
      newJobs: results.filter(
        (result) =>
          result.status === "processed" && result.duplicate === false
      ).length,
    };

    return res.status(200).json({
      summary,
      results,
    });
  } catch (error) {
    console.error("Failed to ingest sample jobs:", error);

    return res.status(500).json({
      error: "Failed to ingest sample jobs",
    });
  }
});

export default router;