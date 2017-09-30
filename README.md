# Proteus Take-Home Assignment

A basic HTTP server that exposes create/retrieve/update operations for a mock key-value store.

## Installation

1. Clone the repo.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the server.

## Usage

Use a tool like curl or Postman to send requests.

Default port is 8000. None of the endpoints are authenticated.

Endpoints exposed and their expected JSON request bodies are as follows: 

- POST `/`

  Creates a new key-value pair and returns the ID used as key. ID is automatically generated on each successful request.

  Req: `{ "value" : "myValue" }`
  Res: `{"message": "Found record at ID: myId.", "value": "myValue"}`

  Gives `201 Created` on successful write to key-value store.
  Gives `500 Internal Server Error` if write was not successful.

- GET `/:id`

  Retrieves a value for a given `:id` parameter specified in the path.

  Req: N/A
  Res: `{"message": "Found record at ID: myId.", "value": "myValue"}`

  Gives `200 OK` on successful retrieval.
  Gives `500 Internal Server Error` if no value exists for that ID.


- PUT `/:id` `{ "value" : "myValue" }`

  Updates an existing value stored at a given `:id`.

  Req: N/A
  Res: `{"message": "Found record at ID: myId.", "value": "myValue"}`

  Gives `200 OK` on successful update.
  Gives `500 Internal Server Error` if no value exists for that ID.
