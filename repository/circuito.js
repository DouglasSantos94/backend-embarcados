const { MongoClient, ObjectId } = require('mongodb');

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
  abrirPersiana: () => {
    collection.updateOne({_id: new ObjectId('6744d708089802821641aed0')}, {$set: {persianaAberta: true}});
  },
  fecharPersiana: () => {
    collection.updateOne({_id: new ObjectId('6744d708089802821641aed0')}, {$set: {persianaAberta: false}});  
  },
  acenderLampada: () => {
    collection.updateOne({_id: new ObjectId('6744d708089802821641aed0')}, {$set: {lampadaLigada: true}});  
  },
  apagarLampada: () => {
    collection.updateOne({_id: new ObjectId('6744d708089802821641aed0')}, {$set: {lampadaLigada: false}});  
  },
  setModoLampadaManual: () => {
    collection.updateOne({_id: new ObjectId('6744d708089802821641aed0')}, {$set: {lampadaManual: true}});  
  },
  setModoLampadaAutomatico: () => {
    collection.updateOne({_id: new ObjectId('6744d708089802821641aed0')}, {$set: {lampadaManual: false}});  
  }
}
