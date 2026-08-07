# Scout

Scout is a cloud-native job discovery platform I built to automate my job search for software engineering and other technical roles.

Instead of manually checking company career pages every day, Scout automatically scans job boards, filters out irrelevant positions, scores opportunities based on my target roles, stores new postings, prevents duplicate alerts, and emails me whenever it finds a strong match.

The project started as a way to solve a problem I personally had, but it also became an opportunity to learn modern backend engineering, cloud deployment, Docker, PostgreSQL, and Microsoft Azure.

---

## Features

- Fetches live job postings from the Greenhouse Job Board API
- Filters out senior, management, internship, and unrelated positions
- Scores jobs using a custom matching engine
- Stores jobs in PostgreSQL with Prisma
- Prevents duplicate alerts using unique source URLs
- Sends email notifications through Resend
- Runs scheduled scans using Azure Container Apps Jobs
- Deploys to Microsoft Azure using Docker containers

---

## Why I Built Scout

Applying for technical roles quickly became repetitive.

Most companies post openings on their own career sites, which meant I was constantly checking the same pages just to make sure I didn't miss a new opportunity. Even when using traditional job boards, I still spent a lot of time sorting through senior roles, duplicate postings, and positions that weren't a good fit.

I built Scout to automate that workflow.

Instead of searching manually, Scout checks job boards for me, filters out positions that don't match what I'm looking for, scores the remaining opportunities, stores anything new, and sends an email whenever it finds a strong match.

My goal wasn't just to build another project. I wanted to build something I could actually use during my own job search while learning how production backend systems are designed and deployed.

---

## Architecture

Scout is built as a cloud-native backend system where each component is responsible for a specific part of the job discovery pipeline.

Rather than combining the API, scheduler, database, and notification system into one application, Scout separates these responsibilities. This makes the system easier to understand, maintain, deploy, and extend.

```text
              Azure Container Apps Job
                       │
                       ▼
                 Greenhouse API
                       │
                       ▼
              Job Normalization
                       │
                       ▼
               Pre-filter Engine
                       │
                       ▼
                Scoring Engine
                       │
                       ▼
         Azure Database for PostgreSQL
                       │
             ┌─────────┴─────────┐
             ▼                   ▼
       Duplicate Job       New Strong Match
             │                   │
             ▼                   ▼
           Ignore           Resend Email
```

### Design Decisions

Scout separates long-running services from scheduled background work.

The Express API is responsible for serving HTTP requests, while Azure Container Apps Jobs execute scheduled scans independently. This prevents duplicate scans, keeps the API lightweight, and allows the scanner to run only when needed.

Job data is persisted in Azure Database for PostgreSQL through Prisma, allowing Scout to track previously discovered jobs and avoid duplicate notifications.

When a new job meets the configured matching criteria, Scout sends an email notification through Resend.

---

## Tech Stack

| Category | Technology | Purpose |
|---|---|---|
| Language | JavaScript (Node.js) | Backend application runtime |
| Web Framework | Express.js | REST API and routing |
| Database | PostgreSQL | Persistent storage for discovered jobs |
| ORM | Prisma | Database access and schema migrations |
| Containerization | Docker & Docker Compose | Consistent local development and deployment |
| Cloud Platform | Microsoft Azure | Production hosting |
| Container Hosting | Azure Container Apps | Runs the Scout API |
| Background Jobs | Azure Container Apps Jobs | Executes scheduled job scans |
| Image Registry | Azure Container Registry | Stores Docker images |
| Job Source | Greenhouse Job Board API | Retrieves live job postings |
| Email Service | Resend | Sends job notifications |
| Version Control | Git & GitHub | Source control |

The technologies used in Scout were chosen to build a modern backend system that could run consistently both locally and in the cloud.

The project combines containerized application development, managed cloud infrastructure, a relational database, scheduled background processing, and third-party API integrations into one end-to-end system.

---

## System Workflow

Every scheduled scan follows the same pipeline from discovering a job to notifying the user.

### 1. Discover Jobs

Azure Container Apps Jobs triggers a scheduled scan that requests the latest postings from the configured Greenhouse job boards.

### 2. Normalize Job Data

Each posting is converted into Scout's internal job format so every downstream component works with a consistent data structure, regardless of where the job originated.

### 3. Pre-filter Jobs

Before scoring a position, Scout removes jobs that are clearly outside the target profile.

Examples include:

- Senior positions
- Management roles
- Internship positions
- Non-technical positions

Filtering early reduces unnecessary scoring operations and keeps irrelevant positions out of the database.

### 4. Score Each Job

Jobs that pass the pre-filter are evaluated by the scoring engine.

The scoring engine considers factors such as:

- Job title
- Seniority
- Early-career indicators
- Customer-facing responsibilities
- Cloud technologies
- API experience
- Enterprise software keywords

Each job receives:

- A numerical score
- A match level
- A list of reasons explaining the score

### 5. Store the Job

Scout stores new jobs in PostgreSQL using Prisma.

Each posting is uniquely identified by its source URL, allowing Scout to remember opportunities it has already discovered.

### 6. Prevent Duplicate Notifications

Before storing a job, Scout checks whether its source URL already exists.

If the job has already been processed, Scout skips it and does not send another email.

This prevents repeated notifications when scheduled scans encounter the same posting multiple times.

### 7. Notify the User

If a job is both new and a strong match, Scout sends an email notification through Resend containing:

- Job title
- Company
- Match score
- Match reasons
- Direct application link

The scheduled scan then completes and exits until the next execution.

---

## Running Locally

### Prerequisites

Before running Scout locally, install:

- Node.js 24+
- Docker Desktop
- Git
- A Resend account and API key

### Clone the Repository

```bash
git clone https://github.com/<your-username>/scout.git
cd scout
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the project root:

```env
PORT=3000
NODE_ENV=development
ENABLE_LOCAL_SCHEDULER=true

DATABASE_URL="postgresql://scout:scoutpassword@localhost:5432/scout?schema=public"

RESEND_API_KEY="your_resend_api_key"
SCOUT_NOTIFICATION_EMAIL="your_email"
SCOUT_FROM_EMAIL="Scout <onboarding@resend.dev>"
```

The `.env` file is excluded from source control and should never be committed.

### Start the Local Environment

```bash
docker compose up -d
```

### Run the API

```bash
npm run dev
```

### Run a Standalone Scan

```bash
npm run scan
```

### Verify the API

```bash
curl http://localhost:3000/health
```

If everything is configured correctly, Scout should return a successful health response.

---

## Cloud Deployment

Scout is deployed to Microsoft Azure as a set of independent cloud services that work together to automate the entire job discovery pipeline.

### Deployment Architecture

| Azure Service | Purpose |
|---|---|
| Azure Container Registry | Stores the Scout Docker image |
| Azure Container Apps | Hosts the Express API |
| Azure Container Apps Jobs | Executes scheduled job scans |
| Azure Database for PostgreSQL | Stores discovered jobs and prevents duplicates |
| Azure Resource Group | Organizes Scout's cloud resources |

Resend runs outside Azure and handles email delivery.

### Production Workflow

1. Azure Container Apps Jobs starts a scheduled scan.
2. Scout retrieves jobs from the configured Greenhouse boards.
3. Jobs are normalized into Scout's internal format.
4. The pre-filter removes irrelevant positions.
5. Remaining jobs are scored.
6. New jobs are stored in Azure Database for PostgreSQL.
7. Duplicate jobs are ignored.
8. Strong matches generate an email notification through Resend.
9. The scheduled job exits until the next execution.

### Why Azure?

I deployed Scout to Microsoft Azure because I wanted the project to run independently of my personal computer and to gain experience deploying a real backend system to the cloud.

Deploying Scout required containerizing the application, provisioning managed infrastructure, configuring scheduled workloads, managing secrets, connecting the application to a managed PostgreSQL database, and coordinating multiple Azure services into a single deployment.

This gave me hands-on experience with:

- Containerized application deployment
- Managed PostgreSQL databases
- Scheduled cloud workloads
- Container image registries
- Secret and environment configuration
- Production deployment and debugging

The result is a backend system that can automatically discover and process jobs without depending on my laptop being online.

---

## Screenshots

### Azure Deployment

![Scout Azure Resources](docs/images/02-azure-resource-group.png)

Scout's production resources running in Microsoft Azure.

### API Health Check

![Scout API Health Check](docs/images/03-container-app-health.png)

The deployed Express API responding successfully from Azure Container Apps.

### Scheduled Job Execution

![Scout Scheduled Job](docs/images/04-scheduled-job-success.png)

A successful Azure Container Apps Job execution running Scout's automated job scan.

### Email Notification

![Scout Email Notification](docs/images/07-email-alert.png)

An example notification generated when Scout discovers a new strong job match.

---

## Lessons Learned

Building Scout taught me much more than how to write backend code.

Throughout the project, I learned how individual technologies work together to create a complete cloud application, from local development to production deployment.

Some of the biggest lessons I took away from the project were:

- Designing services with a single responsibility makes a system easier to understand, test, and extend.
- Separating long-running APIs from scheduled background jobs creates a cleaner production architecture.
- Containerization makes development and deployment environments more consistent.
- Managed cloud services simplify infrastructure, but they still require thoughtful system design.
- Preventing duplicate data can be just as important as storing new data.
- Secrets and credentials should remain outside source control and container images.
- Building software that solves a real personal problem leads to better engineering decisions than building something solely for a resume.

The biggest takeaway from Scout wasn't learning a specific framework or cloud service. It was learning how multiple components work together to build a complete production system.

---

## Roadmap

Scout V1 focuses on solving one problem well: automatically discovering and notifying users about relevant technical opportunities.

Future versions of Scout may expand the platform with:

- Support for additional applicant tracking systems such as Lever and Ashby
- Configurable matching profiles for different users and career interests
- AI-assisted resume matching and personalized application feedback
- Application tracking for interviews, offers, and application history
- A web dashboard for viewing discovered jobs and scan history
- Analytics for identifying trends across job postings and match scores
- Enhanced monitoring, logging, and observability

The long-term vision for Scout is to evolve from a job discovery platform into a personal career assistant that helps manage more of the job search process from discovery to application.

---

Thank you for taking the time to explore Scout.

If you have feedback, ideas, or questions about the project, feel free to open an issue or connect with me on LinkedIn.