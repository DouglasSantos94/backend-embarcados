const express = require('express');
const { MongoClient } = require('mongodb');
const rotasCircuito = require('./routes/circuito');

async function runDb() {

  const uri = 'mongodb+srv://embarcados:emb160@cluster0.7qtvn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
  const client = new MongoClient(uri);
  
  // The connect() method does not attempt a connection; instead it instructs
  // the driver to connect using the settings provided when a connection
  // is required.
  await client.connect();
}

runDb().catch(console.dir);
  
const app = express(); 

const port = 8080;

app.use('/', rotasCircuito);

app.listen(port, function () {

    console.log("Server running! Press CTRL+C to close");

});
