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