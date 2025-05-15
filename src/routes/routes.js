const express = require('express'); 
const router = express.Router(); 

const CompartilhamentoController = require('../controllers/Compartilhamento'); 

router.get('/compartilhamento', CompartilhamentoController.listarCompartilhamento); 
router.post('/compartilhamento', CompartilhamentoController.cadastrarCompartilhamento); 
router.patch('/compartilhamento/:comp_id', CompartilhamentoController.editarCompartilhamento); 
router.delete('/compartilhamento/:comp_id', CompartilhamentoController.apagarCompartilhamento); 


module.exports = router;