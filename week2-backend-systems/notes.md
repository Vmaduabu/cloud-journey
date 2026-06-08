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


# June 3 Notes

## Middleware

Middleware is code that runs before route logic.

## next()

next() tells Express to continue processing the request.

## Validation

Validation checks whether incoming data is acceptable before the application uses it.

## Logging Middlware

Logging middleware records incoming requests so developers can see what is happening inside this application.

# Request Lifecycle

Client
→ Request
→ Middleware
→ Validation
→ Route Logic
→ Response
→ Client

## What I learned

- Middleware runs before route logic.
- next() allows the request to continue
- Validation protects the application from bad input
- Logging helps developers understand request activity.
- Good APIs handle both valid and invalid requests.

#  Project Reflection - Middleware & Validation 

## What did I build?

I built custom middleware that logs incoming requests and improved validation for my API endpoints. I also tested both sucessful and failed requests to verify the middleware and validation correctly.

## What problem did it solve?

Middleware allows requests to be processed before reaching route logic, while validation prevents invalid data from entering the application. Together they make the API more reliable and secure.

## What decisions did I make and why?

I added logging middleware because it provides visibility into incoming traffic and helps with debugging. I also improved validation by checking data types instead of only checking if values existed. This prevents invalid requests from being processed by the application.

## What I would Improve?

I would move middleware into its own file so it can be resued across multiple routes. I would create centralized validation middleware to avoid repeating validation logic throughout the application.

# June 4 Notes

## What is Error Handling?

Error Handling allows an application to contuinue operating when unexpected problems occur. Instead of crashing, the application can recognize a problem, log useful information for developers, and return a safe response to the user.

## Why Error Handling Matters?

Every application will eventually encounter unexpected situations. Files may be missing, services may become unavalible, or data may become corrupted. Good applications are designed to handle these situations gracefully rather than failing completely.

## What is a Validation Error?

A validation error occurs when user provides data that does not meet the applications requirements.

Example: 

A user submits a number instead of name.

Result:

The applications return a 400-level error because the bad request itself is invalid.

## What is a Server Error?

A server error occurs when submitting something unexpected happens inside the application.

Examples: 

- A file cannot be loaded
- A database connection fails
- A service becomes unavailible

Result:

The application returns a 500-level error because the server encountered an internal problem.

## Logging Errors

Logging records technical details about failures so developers can troublshoot problems. Users should receive a simple message while developers receive detailed information through logs.

## How It Was Used In My Project

I added a try/catch bock to my POST /message route. This allows the application to safely handle unexpected failures when loading or saving message data.

The application now: 

1. Validates incoming requests
2. Processes valid requests 
3. Catches unexpected errors
4. Logs technical details
5. Returns a safe response to the user

## What I Learned

I learned that applications should be designed to fail gracefully. Error handling improves reliability, protects the user experience, and makes troubleshooting significantly easier for developers.

# Project Reflection - Error Handling & Debugging 

## What Did I Build?

I improved the reliability of my API by implemnting error handling inside the POST /message route.

The route can now safely handle unexpected failures while continuing to provide meaningful responses to users.

## What Problem Did it Solve?

Without error handling, an unexpected failure could cause the route to stop working or expose technical details to users.

By implementing a try/catch block, the application can safely handle errors and return a consistent response when something goes wrong.

## What Decisions Did I Make And Why?

I chose to seperate validation errors from server errors.

Validation errors occur when a user submits invalid data and return a 400-level response.

Server errors occur when the application encounters an unexpected problem and return a 500-level response.

I also chose to log detailed error information for developers while returning a simple error message to users.

## What Would I Improve?

I would move error handling into a centralized solution so that multiple routes can share the same error-handling logic.

I would also implement structured logging to make troubleshooting easier in larger applications.

## Key Takeaway

Applications should not assume everything will work correctly.

Good software is designed to handle failures gracefully while maintaining a positive user experience.


# June 5 Notes

## What is Data Persistence?

Data persistence is the ability for an application to save information so that it remains availible even after the application shuts down or restarts.

Without persistence, all information exists only in memory and is lost when the application stops running.

## Why Data Persistence Matters

Most real-world applications need to remember information.

Examples include:
- User accounts
- Messages
- Orders
- Transactions
- Product inventories

Persistence allows applications to store this information for future use.

## How Persistence Works In My Project?

My application stores messages inside a JSON fie called:

data/messages.json

When a user submits a message:

1. The application loads existing messages.
2. A new message is added.
3. The updated data is written back to the file.

Because the information is stored on disk, it remains available after the application restarts.

## Application Architecture

My project is seperated into three layers:

## Application Layer

messages.js

Responsible for:

- Receiving requests
- Validating input 
- Returning responses

### Data Access Layer

database.js

Responisble for:

- Reading data
- Writing data
- Managing file operations

### Storage Layer

messages.json

Responsible for:

- Persisting application data

## What I Learned

- Applications need persistent storage to remember information.
- Data can be stored outside of memory.
- Seperating app,ication logic from storage logic improves organization.
- Persistence is a foundational concept used by all databases.


# Project Reflection - Data Persistence

## What Did I Build?

I built a system that can store and retrieve messages using persistence file storage. Mesages remain available even after the applications restarts.

## What Problem Did it Solve?

Without persistence, all data would be lost when the server shuts down. Persistent storage allows information to survive application restarts and remain availible for future requests.

## What Decisions Did I Make and Why?

I seperated request handling from data storage by placing file operations in a dedicated database module. This makes the application easier to maintain and follows common software architecture practices.

## What Would I Improve?

I would eventually replace JSON file storage with a real database such as PostgreSQL or Azure SQL. This would improve scalability, performance, and reliability.

## Key Takeaway

Applications need a reliable way to store information outside of memory. Data persistence is the foundation that allows modern applications to remember users, transactions, and business data.