const express = require('express');
const app = express();
const db = require('widgetdb');
const bodyParser = require('body-parser');
const PORT = 8000;
let idCount = 0;

app.use(bodyParser.json());


// Adds a new value.
app.post('/', (req, res, next) => {
  let value = req.body.value;
  db.put(idCount.toString(), value)
    .then((data)=>{
      res.status(201).json({message: `New record added at ID: ${idCount}.`});
      idCount++;
    })
    .catch(next);
});


// Retrieves a value by id.
app.get('/:id', (req, res, next) => {
  let id = req.params.id;
  db.get(id)
    .then((data)=>{
      if (data === undefined) {
        return Promise.reject("Can't retrieve record; ID not found");
      }
      res.status(200).json({message: `Found record at ID: ${id}.`, value: data});
      })
    .catch(next);
});


// Updates a value by id.
app.put('/:id', (req, res, next) => {
  let id = req.params.id;
  let value = req.body.value;
  db.get(id)
    .then((data)=>{
      if (data === undefined) {
        return Promise.reject("Can't update record; ID not found");
      }
      return db.put(id.toString(), value)
                .then((data)=>{
                  res.status(200).json({message: `Updated record at ID: ${id}.`});
                });
      })
    .catch(next);
});


app.listen(PORT, () => {
  console.log('Server listening on port ', PORT);
});
