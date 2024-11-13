module.exports = {
  getStatusLampada: async (req, res) => {
    const statusLampada = true;

    res.status(200).send(statusLampada);
  },
  getModoLampada: async (req, res) => {
    const modoLampada = true;

    res.status(200).send(modoLampada);
  },
  getStatusPersiana: async (req, res) => {
    const statusPersiana = true;

    res.status(200).send(statusPersiana);
  },
  alterarStatusLampada: async (req, res) => {
    const statusLampada = true;

    res.status(200).send(statusLampada);
  },
  alterarModoLampada: async (req, res) => {
    const modoLampada = true;

    res.status(200).send(modoLampada);
  },
  alterarStatusPersiana: async (req, res) => {
    const statusPersiana = true;

    res.status(200).send(statusPersiana);
  }
}