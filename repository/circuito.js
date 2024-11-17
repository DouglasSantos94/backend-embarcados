const status =  {
  lampadaLigada: false,
  lampadaManual: false,
  persianaAberta: false
};

module.exports = {
  statusLampada: () => status.lampadaLigada,
  modoLampada: () => status.lampadaManual,
  statusPersiana: () => status.persianaAberta,
  abrirPersiana: () => {
    status.persianaAberta = true;
  },
  fecharPersiana: () => {
    status.persianaAberta = false;
  },
  acenderLampada: () => {
    status.lampadaLigada = true;
  },
  apagarLampada: () => {
    status.lampadaLigada = false;
  },
  setModoLampadaManual: () => {
    status.lampadaManual = true;
  },
  setModoLampadaAutomatico: () => {
    status.lampadaManual = false;
  },
}
