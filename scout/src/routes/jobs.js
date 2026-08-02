import express from "express";
import scoreJob from "../matching/scoreJob.js";
import { saveJob } from "../services/jobService.js";
import sampleJobs from "../sources/sampleJobs.js";
import { ingestJobs } from "../services/jobIngestionService.js";
import { ingestGreenhouseBoard } from "../services/greenhouseIngestionService.js";

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

router.post("/ingest-greenhouse", async (req, res) => {
  try {
    const { boardToken, company } = req.body;

    if (!boardToken || !company) {
      return res.status(400).json({
        error: "boardToken and company are required",
      });
    }

    const ingestion = await ingestGreenhouseBoard({
      boardToken,
      company,
    });

   const summary = {
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

    return res.status(200).json({
      source: ingestion.source,
      company: ingestion.company,
      summary,
      results: ingestion.results,
    });
  } catch (error) {
    console.error("Failed to ingest Greenhouse jobs:", error);

    return res.status(500).json({
      error: "Failed to ingest Greenhouse jobs",
    });
  }
});

        export default router;