const express = require('express');

var app = express(); 

const port = 8080;

const status =  {
  ventiladorLigado: true,
  ventiladorManual: true,
  lampadaLigada: true,
  lampadaManual: true,
  persianaAberta: true
};

app.get("/ventilador/status", function(req, res) {
    res.json({ 
      ventiladorLigado: status.ventiladorLigado
    });
});

app.get("/ventilador/modo", function(req, res) {
  res.json({ 
    ventiladorManual: status.ventiladorManual
  });
});

app.get("/lampada/status", function(req, res) {
  res.json({ 
    lampadaLigada: status.lampadaLigada
  });
});

app.get("/lampada/modo", function(req, res) {
  res.json({ 
    lampadaManual: status.lampadaManual
  });
});

app.get("/persiana/status", function(req, res) {
  res.json({ 
    persianaAberta: status.persianaAberta
  });
});

app.put("/ventilador/status", function(req, res) {
  status.ventiladorLigado = !status.ventiladorLigado;
  res.send(200);
})

app.put("/lampada/status", function(req, res) {
  status.lampadaLigada = !status.lampadaLigada;
  res.send(200);
})

app.put("/persiana/status", function(req, res) {
  status.persianaAberta = !status.persianaAberta;
  res.send(200);
})

app.listen(port, function () {

    console.log("Server running! Press CTRL+C to close");

});