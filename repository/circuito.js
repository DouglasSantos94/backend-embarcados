const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://embarcados:emb160@cluster0.7qtvn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri);

const dbName = "embarcados";
const collectionName = "circuito";

const database = client.db(dbName);
const collection = database.collection(collectionName);

module.exports = {
  statusLampada: () => collection.findOne(),
  modoLampada: () => collection.findOne(),
  statusPersiana: () => collection.findOne(),
  // abrirPersiana: () => {
  //   status.persianaAberta = true;
  // },
  // fecharPersiana: () => {
  //   status.persianaAberta = false;
  // },
  // acenderLampada: () => {
  //   status.lampadaLigada = true;
  // },
  // apagarLampada: () => {
  //   status.lampadaLigada = false;
  // },
  // setModoLampadaManual: () => {
  //   status.lampadaManual = true;
  // },
  // setModoLampadaAutomatico: () => {
  //   status.lampadaManual = false;
  // },
}
