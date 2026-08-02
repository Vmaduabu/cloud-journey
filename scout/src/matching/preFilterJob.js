const excludedTitleTerms = [
  "senior",
  "staff",
  "principal",
  "lead",
  "manager",
  "director",
  "vice president",
  "head of",
  "attorney",
  "counsel",
  "recruiter",
  "sales development",
  "account executive",
  "intern",
  "internship",
];

const excludedTitlePatterns = [
  /\bvp\b/i,
  /\bii\b/i,
  /\biii\b/i,
  /\biv\b/i,
];

const targetTitleTerms = [
  "forward deployed",
  "software engineer",
  "solutions engineer",
  "solution engineer",
  "implementation engineer",
  "implementation analyst",
  "implementation consultant",
  "technology consultant",
  "technical consultant",
  "solutions consultant",
  "systems analyst",
  "technology analyst",
  "technical analyst",
  "cloud engineer",
  "associate consultant",
  "new graduate",
  "new grad",
  "early career",
  "university graduate",
];

export default function preFilterJob(job) {
  const title = job.title?.toLowerCase().trim();

  if (!title) {
    return {
      accepted: false,
      reason: "Job title is missing",
    };
  }

  const excludedTerm = excludedTitleTerms.find((term) =>
    title.includes(term)
  );

  if (excludedTerm) {
    return {
      accepted: false,
      reason: `Excluded title term: ${excludedTerm}`,
    };
  }

  const excludedPattern = excludedTitlePatterns.find((pattern) =>
    pattern.test(title)
  );

  if (excludedPattern) {
    return {
      accepted: false,
      reason: `Excluded title pattern: ${excludedPattern}`,
    };
  }

  const matchingTargetTerm = targetTitleTerms.find((term) =>
    title.includes(term)
  );

  if (!matchingTargetTerm) {
    return {
      accepted: false,
      reason: "Title does not match a target role",
    };
  }

  return {
    accepted: true,
    reason: `Matched target title term: ${matchingTargetTerm}`,
  };
}