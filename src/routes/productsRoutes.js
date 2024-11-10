const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');


router.post('/', (req, res) => {
    const { nome, preco } = req.body;
    res.status(201).json(productsController.criarProduto(nome, preco));
});

router.get('/', (req, res) => {
    const { nome } = req.query;
    const resultado = productsController.listarProduto(nome);
    res.json(resultado);
});

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const dadosAtualizados = req.body;
    const resultado = productsController.editarProduto(id, dadosAtualizados);
    res.json(resultado);
});

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const resultado = productsController.apagarProduto(id);
    res.json(resultado);
});

module.exports = router;