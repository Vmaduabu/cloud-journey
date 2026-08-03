import "dotenv/config";
import prisma from "../config/prisma.js";
import { runJobScan } from "../services/jobScanService.js";

async function main() {
  try {
    const results = await runJobScan();

    const failures = results.filter(
      (result) => result.status === "failed"
    );

    if (failures.length > 0) {
        console.error(
            `[Scout] ${failures.length} board scan(s) failed.`
        );

        process.exitCode = 1;
    }
  } catch (error) {
    console.error("[Scout] Job scan crashed:", error);
    process.exitCode = 1;

  } finally {
    await prisma.$disconnect();
  }
}

main();