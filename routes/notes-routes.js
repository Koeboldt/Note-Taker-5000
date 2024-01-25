const app = require('express').Router();
let dataBase = require('../db/db.json')
const fs = require('fs')

app.get('/notes',  (req,res) => {
    try{
        res.json(dataBase);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

app.post('/notes', (req, res) =>{
    console.log(req.body);
    req.body.id = Math.floor(Math.random() * 100);
    dataBase.push(req.body);
    res.json('New note created.');
    fs.writeFile('./db/db.json', JSON.stringify(dataBase), (err) => {
        err ? console.log(err) : console.log("success")
    })
});

/*app.delete('/notes/:id', (req, res) =>{
dataBase = dataBase.filter((item => {
    return item.id !== req.params.id
}))

});
*/
module.exports = app