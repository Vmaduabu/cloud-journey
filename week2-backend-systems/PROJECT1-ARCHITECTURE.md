# Project 1 Architecture

## Purpose 

Store and manage messages through a REST API.

## Layers

### Presentation Layer

messages.js

Responsibilities:

- Receive requests
- Send responses 

### Business Logic Layer

messages.js

Responsibilities:

- Validation
- Request handling
- Error handling

### Data Access Layer

databse.js

Responsibilities:

- Read data
- Write data

### Storage Layer

messages.json

Responsibilities: 

- Persist data

### Configuaration Layer

config.js

Responsibilities:

- Application settings
- Environment configuration