const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route for landing page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

// Route for notes page
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

// start program with node path.js in write file 
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));