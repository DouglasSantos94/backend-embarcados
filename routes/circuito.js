const express = require('express');
const circuitoController = require('../controllers/circuito');

const router = express.Router();

router.use(express.urlencoded({
  extended: true
}));

router.get('/lampada/status', circuitoController.getStatusLampada);
router.get('/lampada/modo', circuitoController.getModoLampada);
router.get('/persiana/status', circuitoController.getStatusPersiana);
router.put('/lampada/acender', circuitoController.acenderLampada);
router.put('/lampada/apagar', circuitoController.apagarLampada);
router.put('/lampada/manual', circuitoController.setModoLampadaManual);
router.put('/lampada/automatico', circuitoController.setModoLampadaAutomatico);
router.put('/persiana/abrir', circuitoController.abrirPersiana);
router.put('/persiana/fechar', circuitoController.fecharPersiana);


module.exports = router;