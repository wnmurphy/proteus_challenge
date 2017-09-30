const express = require('express');
const db = require('widgetdb');
const app = express();
const PORT = 8000;


// Handles root path.
app.get('/', (req, res) => {
  res.send('Server is live!')
});


// Retrieves a value by ID.
app.get('/:id', (req, res) => {
  let id = req.params.id;
  // Look up ID
  db.get(1).then((data)=>{
    res.send(200, data);
  }).catch((err)=>{
    res.send(500, 'Dang it, something broke.')
  });
});


// Adds a new key-value pair in widgetdb.
app.post('/', (req, res) => {
  // Check that key doesn't already exist.
  db.put(1, "success").then(()=>{
    res.send(201, 'New record added to database');
  }).catch((err)=>{
    res.send(500, 'Dang it, something broke.')
  });
});


// Updates a key-value pair by ID. 
app.put('/:id', (req, res) => {
  let id = req.params.id;
  // Check that key exists in db.
  // Update the value for that key
  res.send(202, 'Update accepted.');
});


app.listen(PORT, () => {
  console.log('Server listening on port ', PORT);
});

// TODO: Probably factor out helper function to check for record existence.


