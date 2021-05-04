const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const notesList = require('../../db/db.json')


// Route for landing page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

// Route for notes page
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../notes.html')));

app.get('/api/notes', (req, res) => res.json(notesList));

// Route to add a new note to the page
app.post('/notes', (req, res) => {
    const newNote = req.body;
    console.log("New note has been added.")
})


// start program with node path.js in write file 
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));