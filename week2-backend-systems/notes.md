# May 30 Notes

## Request Lifecycle

Backend systems process requests through a sequence of steps.

Example:

Client
→ Request
→ Middleware
→ Route
→ Database
→ Response
→ Client

## Middleware

Middleware executes before route logic.

Examples:
- JSON parsing
- logging
- authentication

## Request Flow

Requests move through middleware before reaching route handlers.

Route handlers perform business logic and interact with storage systems.

## What I learned 

- Requests follow a predictable lifecycle.
- Middleware executes before routes.
- Routes contain business logic.
- Databases and storage systems are accused through route handlers.
- Responses are returned to clients after processing is complete.

# Project Reflection - Requests Lifecycle

## What did I build?

I traced and observed the lifecycle of requests moving through my backend application.

## What problem did it solve?

It helped me understand how backend systems process requests and return responses.

## What decisions did I make and why?

I added logging statements to observe backend execution flow and understand how requests move through the system.

## What I would improve?

I would eventually implement centralized logging and monitoring tools for better visibility into system behavior.

## May 31 Notes

## Error Handling 

Production systems must handle features gracefully.

## Centralized Error handling

Instead of handling errors seperately in every route, systems often use centralized error middleware.

## Error Middleware

Express error middleware contains four parameters:

(err, req, res, next)

This allows express to route errors to a dedicated handler.

## What I learned

- Errors should be handled consistently
- Middleware can be used for more than logging 
- Centralized error handling improves maintanability.
- Production systems avoid exposing internal error details to users.

# Project Reflection - Centralized Error Handling

## What did I build?

I added centralized error handling middleware to my backend application.

## What problem does it solve?

It provides a consistent way to handle application failures without duplicating error logic routes.

## What decisions did I make and why?

I used Express error middlware because production systems benefit from centralized error management.

## What I would improve?

I would eventually add structured logging, monitoring, and custom error types.

# June 1 Notes

## Version Control

Version control allows developers to track changes to files over time.

## Git

Git is a distributed version control system used by software teams.

## Repository

A repository contains project files and their revision history.

## Working Directory

The working directory contains files currently being edited.

## Stagging Area 

The stagging area contains changes prepared for a commit.

## Commit 

A commit is a save point in a project's history.

## Git Workflow 

Working Directory 
- git add
- Staging Area
- git commit 
- Repository History 

## What I Learned

- Git tracks changes to files.
- Commits act as project checkpoints.
- The staging area controls what gets commited.
- Version control helps recover from mistakes.

# Project Reflection - Git Fundamentals

## What did I learn?

I built a simple Git workflow by creating files, tracking changes, stanging those changes, and creating commits.

## What problem did it solve? 

Git solves the problem of losing work and not knowing what changed over time. It allows developers to track project history, recover from mistakes, and safely manage changes.

## What decisions did I make and why? 

I chose to stage files before committing because Git seperates working changes from committed history. This allows developers to control exactly what gets included in each commit.

I also used meaningful commit messages because they make projects easier to understand and maintain.

## What I would improve?

I would learn more advanced Git workflows including branching, merging, pull requests, and collaborative development so I can work effectively on larger projects and with other developers.

## June 2 Notes

## API

An API acts as a messenger between client and server.

## Request 

A request is information sent from a client to a server.

## Response 

A response is information returned from a server to a client.

## HTTP

HTTP is the protocol used for communication between clients and servers. 

# GET

GET request retrieve information.

## POST

POST requests send information 

## Request lifecycle 

Client 
→ Request
→ Validation
→ Business Logic
→ Response
→ Client

## Health Endpoint 

Health endpoints allow systems to verify that an application is running correctly.

## What I Learned

- APIs connect clients and servers.
- Every requests follows a lifecylce.
- GET retrieves data.
- POST sends data.
- Health endpoints are common in cloud environments.

# Project Reflection - APIs and Request Lifecylce 

## What did I build?

I built a health-check API endpoint and traced the complete request lifecycle through my express application.

## What problem did it solve?

The health endpoint allows users and systems to verify that the application is running and responsive.

## What decisions did I make and why?

I used a GET endpoint becasue health checks retrieve information without modifying data. I also returned JSON because it is the standard format used for modern APIs.

## What would I improve?

I would add database checks, dependency checks, and more advanced monitoring functionality to make the health endpoint more useful in production environments.