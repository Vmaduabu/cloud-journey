import express from "express";
import scoreJob from "../matching/scoreJob.js";
import { saveJob } from "../services/jobService.js";

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

export default router;