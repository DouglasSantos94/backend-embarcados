const express = require('express');
const circuitoController = require('../controllers/circuito');

const router = express.Router();

router.use(express.urlencoded({
  extended: true
}));

router.get('/lampada/status', circuitoController.getStatusLampada);
router.get('/lampada/modo', circuitoController.getModoLampada);
router.get('/persiana/status', circuitoController.getStatusPersiana);
router.put('/lampada/status', circuitoController.alterarStatusLampada);
router.put('/lampada/modo', circuitoController.alterarModoLampada);
router.put('/persiana/status', circuitoController.alterarStatusPersiana);

module.exports = router;