const express = require('express');
const widgetdb = require('widgetdb');
const app = express();
const PORT = 8000;

// Handles root path.
app.get('/', (req, res) => {
  res.send('Server is live!')
});

// Retrieves a key-value pair by ID.
app.get('/:id', (req, res) => {
  // Look up ID
  // If ID not found, return error
  // If ID found, return data
});

// Creates a new key-value pair in widgetdb.
app.post('/', (req, res) => {
  res.send('Server is live!')
}
});

// Updates a key-value pair by ID. 
app.put('/:id', (req, res) => {
  // Look up ID
  // If ID not found, return error
  // If ID found, update data and return success.
  res.send('Server is live!')
});


app.listen(PORT, () => {
  console.log('Server listening on port ', PORT);
});

// TODO: Maybe add delete later, for CRUD completeness.

// TODO: Probably factor out helper function to check for record existence.


