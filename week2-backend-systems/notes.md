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