const express = require('express');
const path = require('path');
const fs = require('fs')
const idAutoIncrement = require("id-auto-increment");

const app = express();
const PORT = process.env.PORT || 3000;
const dbArray = require('./db/db.json')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Route for landing page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

// Route for notes page
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));


// Route to hopefully read the data.
app.get('/api/notes', (req, res) => {
   res.json(dbArray)    
}); 


// Route to put save data into the read file
app.post('/api/notes', (req, res) => {
    const notes = req.body;
     const id = idAutoIncrement()
        .then(function(id) {
            notes.id = id;
            dbArray.push(notes)
            console.log(notes) 
            console.log(dbArray)
        })
        .catch(function(err) {
            console.log(err)
        })
}); 

app.delete('/api/notes/:id', (req, res) => {
    const id = req.param.id;
    const index = dbArray.map(entry => entry.id).indexOf(id);
    dbArray.splice(index);
    res.json(dbArray)
});


// start program with node path.js in write file 
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));