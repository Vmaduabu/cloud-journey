export async function notifyAboutJob(job, scoringResult) {
    console.log("\n=== SCOUT JOB ALERT ===");
    console.log(`Title: ${job.title}`);
    console.log(`Company: ${job.company}`);
    console.log(`Location: ${job.location || "Not specified"}`);
    console.log(`Score: ${scoringResult.score}`);
    console.log(`Match Level: ${scoringResult.matchLevel}`);
    console.log(`URL: ${job.sourceUrl}`);
    console.log(`Reasons: ${scoringResult.reasons.join(", ")}`);
    console.log("=======================\n");

    return {
        sent: true,
        channel: "console",
    };
}