const express = require('express');
const path = require('path');
const fs = require('fs')

const app = express();
const PORT = 3000;

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

 //app.get('/api/notes', (req, res) => res.json(notes));
// I did this but I doesn't work 
//app.get('/api/notes', (req, res) => res.json("db/db.json"));
app.get('/api/notes', (req, res) => {
    fs.readFile('db/db.json', res, function
    (err){
        if (err) throw err;
        console.log("file written") 
    })
});

// Route to add a new note to the page
app.post('/api/notes', (req, res) => {
    fs.writeFile('db/db.json', res, function
    (err) {
        if (err) throw err;
        console.log("New Note Added")

    })
    // notes.push(req.body);
    // console.log(notes);
    // console.log("New note has been added.");
});


// start program with node path.js in write file 
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));