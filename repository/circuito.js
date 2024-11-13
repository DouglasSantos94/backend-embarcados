const status =  {
  lampadaLigada: true,
  lampadaManual: true,
  persianaAberta: true
};

module.exports = {
  statusLampada: () => status.lampadaLigada,
  modoLampada: () => status.lampadaManual,
  statusPersiana: () => status.persianaAberta,
  alterarStatusPersiana: () => {
    status.persianaAberta = !status.persianaAberta;
  },
  alterarStatusLampada: () => {
    status.lampadaLigada = !status.lampadaLigada;
  },
  alterarModoLampada: () => {
    status.lampadaManual = !status.lampadaManual;
  },
}
