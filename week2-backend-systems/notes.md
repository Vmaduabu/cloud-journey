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