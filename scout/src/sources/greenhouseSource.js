function stripHtml(html = "") {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

export async function fetchGreenhouseJobs({
  boardToken,
  company,
}) {
  if (!boardToken || !company) {
    throw new Error("boardToken and company are required");
  }

  const url =
    `https://boards-api.greenhouse.io/v1/boards/` +
    `${boardToken}/jobs?content=true`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
        `Greenhouse request failed: ${response.status} ${response.statusText}`
    );
  };

  const data = await response.json();

  return data.jobs.map((job) => ({
    externalId: String(job.id),
    title: job.title,
    company,
    location: job.location?.name || null,
    description: stripHtml(job.content),
    sourceUrl: job.absolute_url,
    source: "greenhouse",
    postedAt: job.updated_at || null,
  }));
}
