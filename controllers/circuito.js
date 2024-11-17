const repositorioCircuito = require('../repository/circuito');

module.exports = {
  getStatusLampada: async (req, res) => {
    const statusLampada = repositorioCircuito.statusLampada();

    res.status(200).send(statusLampada);
  },
  getModoLampada: async (req, res) => {
    const modoLampada = repositorioCircuito.modoLampada();

    res.status(200).send(modoLampada);
  },
  getStatusPersiana: async (req, res) => {
    const statusPersiana = repositorioCircuito.statusPersiana();

    res.status(200).send(statusPersiana);
  },
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