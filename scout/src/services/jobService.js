import prisma from "../config/prisma.js";

export async function saveJob(job, scoringResult) {
  const existingJob = await prisma.job.findUnique({
    where: {
      sourceUrl: job.sourceUrl,
    },
  });

  if (existingJob) {
    return {
      job: existingJob,
      duplicate: true,
    };
  }

  const savedJob = await prisma.job.create({
    data: {
      title: job.title,
      company: job.company,
      location: job.location || null,
      description: job.description,
      sourceUrl: job.sourceUrl,
      score: scoringResult.score,
      matchLevel: scoringResult.matchLevel,
    },
  });

  return {
    job: savedJob,
    duplicate: false,
  };
}