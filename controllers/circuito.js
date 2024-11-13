const repositorioCircuito = require('../repository/circuito');

module.exports = {
  getStatusLampada: async (req, res) => {
    const statusLampada = repositorioCircuito.statusLampada();

    res.status(200).send(statusLampada);
  },
  getModoLampada: async (req, res) => {
    const modoLampada = repositorioCircuito.modoLampada;

    res.status(200).send(modoLampada);
  },
  getStatusPersiana: async (req, res) => {
    const statusPersiana = repositorioCircuito.statusPersiana;

    res.status(200).send(statusPersiana);
  },
  alterarStatusLampada: async (req, res) => {
    repositorioCircuito.alterarStatusLampada();

    res.sendStatus(200);
  },
  alterarModoLampada: async (req, res) => {
    repositorioCircuito.alterarModoLampada();

    res.sendStatus(200);
  },
  alterarStatusPersiana: async (req, res) => {
    repositorioCircuito.alterarStatusPersiana();

    res.sendStatus(200);
  }
}