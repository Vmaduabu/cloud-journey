import "dotenv/config";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function notifyAboutJob(job, scoringResult) {
  const { data, error } = await resend.emails.send({
    from: process.env.SCOUT_FROM_EMAIL,
    to: process.env.SCOUT_NOTIFICATION_EMAIL,
    subject: `🚀 New Scout Match: ${job.title}`,

    html: `
      <h2>🚀 Scout found a new job!</h2>

      <p><strong>Title:</strong> ${job.title}</p>
      <p><strong>Company:</strong> ${job.company}</p>
      <p><strong>Location:</strong> ${job.location ?? "Not specified"}</p>

      <p><strong>Score:</strong> ${scoringResult.score}</p>
      <p><strong>Match:</strong> ${scoringResult.matchLevel}</p>

      <h3>Why Scout matched it</h3>

      <ul>
        ${scoringResult.reasons
          .map(reason => `<li>${reason}</li>`)
          .join("")}
      </ul>

      <p>
        <a href="${job.sourceUrl}">
          Apply Here
        </a>
      </p>
    `,
  });

  if (error) {
    throw error;
  }

  console.log("📧 Email sent!");

  return {
    sent: true,
    messageId: data.id,
    channel: "email",
  };
}