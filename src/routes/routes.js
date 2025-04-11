const express = require('express'); 
const router = express.Router(); 

const CompartilhamentoController = require('../controllers/Compartilhamento'); 

router.get('/usuarios', CompartilhamentoController.listarCompartilhamento); 
router.post('/usuarios', Compartilhamento.cadastrarCompartilhamento); 
router.patch('/usuarios', CompartilhamentoController.editarCompartilhamento); 
router.delete('/usuarios', CompartilhamentoController.apagarCompartilhamento); 


module.exports = router;