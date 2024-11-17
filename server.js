const express = require('express');
const { MongoClient } = require('mongodb');
const rotasCircuito = require('./routes/circuito');

const uri = 'mongodb+srv://embarcados:Embarcados@123@cluster0.7qtvn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const app = express(); 

const port = 8080;

app.use('/', rotasCircuito);

app.listen(port, function () {

    console.log("Server running! Press CTRL+C to close");

});