const express = require('express');
const path = require('path');
const fs = require('fs')

const app = express();
const PORT = 3000;
const dbArray = require('./db/db.json')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// const notes = [
//     {
//         title:'Test Title',
//         text:'Test text'
//     },
// ];
// module.exports = notes;

// Route for landing page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

// Route for notes page
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));

//Top one works with array on this page
 //app.get('/api/notes', (req, res) => res.json(notes));

// Route to hopefully read the data.
app.get('/api/notes', (req, res) => {
   res.json(dbArray)    
}); 


// Route to put save data into the read file
app.post('/api/notes', (req, res) => {
    const notes = req.body
    dbArray.push(notes)
    console.log(notes)
    console.log(dbArray)
}); 


// start program with node path.js in write file 
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));