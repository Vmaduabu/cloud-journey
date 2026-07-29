const express = require("express");
const scoreJob = require("../matching/scoreJob");

const router = express.Router();

router.post("/score", (req, res) => {
  const { title, company, location, description } = req.body;

  if (!title || !company || !description) {
    return res.status(400).json({
      error: "title, company, and description are required",
    });
  }

  const result = scoreJob({
    title,
    company,
    location,
    description,
  });

  return res.status(200).json({
    job: {
      title,
      company,
      location: location || "Not specified",
    },
    ...result,
  });
});

module.exports = router;