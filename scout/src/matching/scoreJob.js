export default function scoreJob(job) {
  let score = 0;
  const reasons = [];

  const title = job.title.toLowerCase();
  const description = job.description.toLowerCase();

  // Early-career signals
  if (
    title.includes("2027 graduate") ||
    title.includes("new graduate") ||
    title.includes("new grad") ||
    title.includes("early career") ||
    title.includes("entry level")
  ) {
    score += 30;
    reasons.push("Matches early-career target");
  }

  // Target roles
  if (title.includes("forward deployed")) {
    score += 45;
    reasons.push("Matches Forward Deployed Engineer");
  }

  if (title.includes("software engineer")) {
    score += 30;
    reasons.push("Matches Software Engineer");
  }

  if (title.includes("associate consultant")) {
    score += 30;
    reasons.push("Matches Associate Consultant");
  }

  if (
    title.includes("implementation") ||
    title.includes("solutions engineer") ||
    title.includes("technology analyst") ||
    title.includes("systems analyst") ||
    title.includes("technical consultant")
  ) {
    score += 30;
    reasons.push("Matches target enterprise technology role");
  }

  // Work-style signals
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

  if (
    description.includes("enterprise") ||
    description.includes("business requirements")
  ) {
    score += 10;
    reasons.push("Mentions enterprise or business systems");
  }

  // Seniority penalties
  if (
    title.includes("senior") ||
    title.includes("staff") ||
    title.includes("principal") ||
    title.includes("manager") ||
    title.includes("director")
  ) {
    score -= 50;
    reasons.push("Role appears too senior");
  }

  if (
    description.includes("5+ years") ||
    description.includes("7+ years") ||
    description.includes("10+ years")
  ) {
    score -= 40;
    reasons.push("Experience requirement is too high");
  }

  const finalScore = Math.max(0, Math.min(score, 100));

  let matchLevel = "low";

  if (finalScore >= 70) {
    matchLevel = "strong";
  } else if (finalScore >= 45) {
    matchLevel = "moderate";
  }

  return {
    score: finalScore,
    matchLevel,
    reasons,
  };
}