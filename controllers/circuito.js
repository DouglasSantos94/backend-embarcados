const repositorioCircuito = require('../repository/circuito');

module.exports = {
  getStatusLampada: async (req, res) => 
    repositorioCircuito.statusLampada().then(data => {
      console.log(data)
      res.status(200).send(data.lampadaLigada);
    })
  ,
  getModoLampada: async (req, res) => 
    repositorioCircuito.modoLampada().then(data => {
      res.status(200).send(data.lampadaManual);
    })
  ,
  getStatusPersiana: async (req, res) => 
    repositorioCircuito.statusPersiana().then(data => {
      res.status(200).send(data.persianaAberta);
    })
  ,
  setModoLampadaManual: async (req, res) => {
    repositorioCircuito.setModoLampadaManual();

    res.sendStatus(200);
  },
  setModoLampadaAutomatico: async (req, res) => {
    repositorioCircuito.setModoLampadaAutomatico();

    res.sendStatus(200);
  },
  acenderLampada: async (req, res) => {
    repositorioCircuito.acenderLampada();

    res.sendStatus(200);
  },
  apagarLampada: async (req, res) => {
    repositorioCircuito.apagarLampada();

    res.sendStatus(200);
  },
  abrirPersiana: async (req, res) => {
    repositorioCircuito.abrirPersiana();

    res.sendStatus(200);
  },
  fecharPersiana: async (req, res) => {
    repositorioCircuito.fecharPersiana();

    res.sendStatus(200);
  }
}