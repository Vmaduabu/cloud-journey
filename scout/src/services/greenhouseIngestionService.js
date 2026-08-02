import { fetchGreenhouseJobs } from "../sources/greenhouseSource.js";
import { ingestJobs } from "./jobIngestionService.js";

export async function ingestGreenhouseBoard({
    boardToken,
    company,
}) {
    const jobs = await fetchGreenhouseJobs({
        boardToken,
        company,
    });
    
    const results = await ingestJobs(jobs);

    return {
        source: "greenhouse",
        boardToken,
        company,
        fetched: jobs.length,
        results,
    };
}