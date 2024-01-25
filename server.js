const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
const api = require('./routes/index');
app.use(express.static('public'));

app.use('/', api)


const PORT = 3001;

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'))
});

app.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname + '/public/notes.html'))
});

app.listen(PORT, () => {
    console.log('LISTENING ON PORT: ' + PORT);
});