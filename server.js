const express = require('express');
const rotasCircuito = require('./routes/circuito');

const app = express(); 

const port = 8080;

app.use('/', rotasCircuito);

app.listen(port, function () {

    console.log("Server running! Press CTRL+C to close");

});