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