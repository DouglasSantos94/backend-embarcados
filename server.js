const express = require('express');
const { MongoClient } = require('mongodb');
const rotasCircuito = require('./routes/circuito');

const uri = '';
const app = express(); 

const port = 8080;

app.use('/', rotasCircuito);

app.listen(port, function () {

    console.log("Server running! Press CTRL+C to close");

});
