function scoreJob(job) {
  let score = 0;
  const reasons = [];

  const title = job.title.toLowerCase();
  const description = job.description.toLowerCase();

  if (title.includes("forward deployed")) {
    score += 50;
    reasons.push("Matches target role: Forward Deployed Engineer");
  }

  if (title.includes("software engineer")) {
    score += 35;
    reasons.push("Matches target role: Software Engineer");
  }

  if (
    description.includes("customer") ||
    description.includes("client")
  ) {
    score += 15;
    reasons.push("Includes customer-facing work");
  }

  if (description.includes("api")) {
    score += 10;
    reasons.push("Mentions APIs");
  }

  if (
    description.includes("cloud") ||
    description.includes("azure")
  ) {
    score += 10;
    reasons.push("Mentions cloud technologies");
  }

  const finalScore = Math.min(score, 100);

  let matchLevel = "low";

  if (finalScore >= 75) {
    matchLevel = "strong";
  } else if (finalScore >= 50) {
    matchLevel = "moderate";
  }

  return {
    score: finalScore,
    matchLevel,
    reasons,
  };
}

export default scoreJob;