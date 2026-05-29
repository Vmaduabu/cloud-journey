# week 1 Note

## What is localhost?
localhost refers to my own machine/server.

## What is a port?
A port is a communication endpoint a server listens on.

## What is a server?
A server listens for requests and returns responses.

Day #4 Review 

## localhost
localhost maps to 127.0.0.1 and refers to my own machine.

## IP Addresses
IP addresses identify devices on a network.

## Ports 
Ports are common communication endpoints that processes listen on.

## Processes
A process is a running program in memory.

## What I Reinforced 
- Running backend servers
- Port behavior
- Request flow
- Linux navigation

# May 19 Notes

## localhost
localhost maps 127.0.0.1 and refers to my own machine.

## What is a route?
A route maps requests to responses. 

## What is an API?
An API exposes functionality/data through endpoints.

## What is JSON
JSON is a structured format used for exchanging data.

## What I learned
- APIs power communication between systems.
- Backend servers respond to requests through notes.
- JSON is heavily used in modern applications.

# Request Lifecycle

1. Browser sends requests.
2. Server receives the request.
3. Route processes request.
4. Response returned.
5. Browser displays response.

# May 20 Notes

## Frontend vs Backend
Frontend is what users see.
Backend handles logic, APIs, and data.

## Query Parameters
Query parameters send data through URLS.

## HTTP Status Codes 
200 = success
404 = route not found 
500 = server error

## What I learned
- Backend systems process requests and return responses.
- APIs can receive dynamic input.
- Status codes communicate system state.

# Middleware Request Flow

1. Requests enters server
2. Middleware processes request
3. Route handles request
4. Response returned

# May 21 Notes

## Middleware
Middleware processes requests before routes execute.

## GET vs POST
GET retrieves data.
POST sends data to backend systems.

## JSON Parsing
express.json() lets the backend read incoming JSON data.

## What I learned 
- Middleware runs before routes.
- Backend systems can receive incoming data
- APIs process requests and return responses 

# Backend Architecture Flow

Client 
↓
API Request
↓
Middleware
↓
Route logic
↓
Databases/Storage
↓
Response Returned

# May 22 Notes 

## Databases
Databases provide persistent storage for backend systems

 ## CRUD
 CREATE = add data
 READ = retrieve data
 UPDATE = modify data
 DELETE = remove data

 ## Backend Architecture 
 Backend sysems process requests and interact with storage systems

 ## What I learned 
 - APIs often interact with databases.
 - Backend systems store and retrieve data.
 - CRUD operations power modern applications.

 # Project Reflection - Environmental Variables

 ## What did I Build?
 I updated my backend to load configuration dynamically using environment variables.

 ## What problem does it solve?
 It seperates configuration and secrets from application code.

 ## What decisions did I make and Why?
 I used dotenv and a .env file because production systems should avoid hardcoded configuration.

 ## What I would improve?
 I would eventually move secrets into a real cloud secret manager instead of a local .env file.

 # May 23 Notes

## Environment Variables
Environment variables store configuration outside application code.

## dotenv
dotenv loads environment variables from a .env file.

## Why Environment Variables Matter
Production systems avoid hardcoded configuration and secrets.

## What I learned
- Backend systems seperate config from logic.
- Production systems rely heavily on environmental variables.
- Environment variables improve security and flexibility.

# Modular Backend Architecture

Large backend systems seperate routes and responsibilities into different files to improve organization, scalability, and maintainability.

# Project Reflection - Modular Backend Architecture

## What did I build?
I recognized my backend by separating message routes into their own module.

## What problem does it solve?
It improves organization and makes backend systems easier to scale and maintain.

## What decisions did I make and Why?
I seperated Routes into different files because production systems should avoid keeping all backend logic in one script.

## What would I improve?
I would eventually seperate middleware, configuration, and database logic into their own folders as well.   

## May 24 Notes

## Modular Architecture
Backend systems often seperate routes and responsibilities into different files.

## Why Organizational Matters
Modular systems are easier to scale, debug, and maintain.

## What I Learned
- Production systems avoid giant single-file architectures.
- Backend routes can be seperated into modules.
- Scalable systems rely heavily on organization.

# Project Reflection - REST APIs and Error Handling

## What did I build?
I improved my backend API by adding validation, status codes, and error handling routes.

## What problem did it solve
It helps backend systems handle invalid requests and operational failures more reliably.

## What decisions did I make and why?
I added validation and status codes beacuse production APIs should communicate failures clearly and avoid accepting incomplete data.

# What I would improve?
I would eventually add centralized error-handling middlware and persistent database validation.

## May 25 Notes

## REST APIs
Rest APIs organize backend communication using structured routes and predictable behaviors.

## Status Codes
Backend systems use status codes to communicate success and failure.

## Validation
Validation protects systems from incomplete or invalid data.

## What I learned
- APIs should be consistent and organized.
- Production systems must handle failures gracefully.
- Backend systems validate incoming requests.

## Project Reflection - Persistent Backend Storage

## What dis I build?
I updated my backend API to persist message data using JSON file storage.

## What problem did it solve?
It prevents backend data from disapperaring after server restarts.

## What decisions did I make and why?
I used file-based storage to introduce persistence concepts before moving into full databses.

## What would I imrpove?
I would eventually replace JSON file storage with a real database like PostgreSQL or MongoDB.

## May 26 Notes

## Persistence
Persistence means data survives after backend systems restart.

## File Storage
Backend systems can read and write data using file system operations.

## What I learned
- Memory-based storage disappears after restart.
- Backend systems use persistence to retain data.
- Node.js can interact with files using fs module

# Project Reflection 

## What did I build?
I seperated backend storage logic into its own database module.

## What problem does it solve?
It improves backend storage logic into its own datbase.

## What decisions did I make and why?
I moved database functions into their own file because scalable systems avoid mixing routes, storage, and business logic together.

# What I would improve?
I would eventually replace JSON storage with Postgre SQL or MongoDB and add asynchrnous database operations.

## May 27 Notes

## Database Architecture
Production systems seperate storage logic from API route logic.
 
## Persistence Evolution
Backend systems evolve from memory, to files, to databases.

## Seperation of Responsibility
Each file should have a clear job. Routes should handle API behavior, while database modules should handle storage operations

## What I Learned
- Databases solve scalability and persistence problems.
- Backend systems seperate responsibilities into modules.
- API routes and storage logic should not be tightly coupled.

## Project Reflection - Async Backend Architecture

## What did I build?
I converted backend storage operations from synchronous file handling to asynchronous architecture using async/await.

## What problem does it solve?
It reduces blocking operations and improves backend scalability by allowing the server to handle work more efficiently.

## What decisions did I make and why?
I swicthed to asynchronous file operations because production systems should avoid blocking the server during storage operations.

## What would I improve?
I would eventually move from JSON storage into real asynchronous databases like PostgreSQL or MongoDB.

## May 28 Notes 

## Asynchronous Systems

Async systems allow backend operations to run without blocking the server.

## async/await

Modern Node.js backends commonly use async/await to manage asynchronous operations in a readable way.

## Scalability

Blocking operations reduce scalability because the server must wait for tasks to complete before processing other work.

## What I learned

- Synchronous operations block execution.
- Async systems improve responsiveness.
- Production systems rely heavily on asynchronous architecture.
- Backend architecture decisons impact scalability.

## May 29 Notes

## CRUD 

CRUD stands for:

- Create 
- Read
- Update
- Delete

Most backend systems use CRUD operations to manage resources.

Examples:
- users
- messages
- orders
- products

## Resources

A resource is something an API manages.

Examples:
- users
- messages
- products
- orders

Resources need unique IDs so they can be individually managed.

## Resource IDS

Examples: 
- User ID
- Product ID
- Order ID
- Message ID

IDS allow APIs to:
- retrive specific resources
- update specific resources 
- delete specific resources

Without IDs, systems cannot reliably manage individual resources.

--

## Route Parameters

Route parameters allow APIs to target specific resources.

Example:

DELETE /message/123

Express accesses:

req.params.id

This allows the API to identify which specific resource should be modified.

## What I Learned

- APIs manage resources rather than simple collections of data.
- Resources require unique IDs.
- Route parameters help APIs target specific resources.
- CRUD operations form the foundation of most backend systems.
- DELTE operations remove specific resources using IDs.

# Project Reflection - CRUD Opertions

## What did I build?

I extended my backend API by adding unique IDs and delete functionality for messages.

## What problem does it solve?

It allows resources to be individually managed instead of treating all data as one collection.

## What decisions did I make and Why?

I added IDs beacuse production systems require unique resource identification for update and delete operations.

I used route parameters because they allow APIs to target specific resources.

## What would I improve?

I would eventually add update functionality, database generated IDS, and a real database such as PostgreSQL or MongoDB.