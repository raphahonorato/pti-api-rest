const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');


//create
router.post('/', async (req, res) => {
    try {
        const { nome, preco, quantidadeEstoque, marca, modelo, garantiaMeses } = req.body;

        const resultado = await productsController.criarProduto(
            nome,
            preco,
            quantidadeEstoque,
            marca,
            modelo,
            garantiaMeses
        );

        res.status(201).json(resultado);
    } catch (err) {
        res.status(500).json({ mensagem: 'Erro ao criar o produto', erro: err.message });
    }
});


//read
router.get('/', async (req, res) => {
    try {
        const { nome } = req.query;
        const resultado = await productsController.listarProduto(nome);
        res.status(200).json(resultado);
    } catch (err) {
        res.status(500).json({ mensagem: 'Erro ao listar produtos', erro: err.message });
    }
});


//update
router.put('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const dadosAtualizados = req.body;
        const resultado = await productsController.editarProduto(id, dadosAtualizados);
        res.status(200).json(resultado);
    } catch (err) {
        res.status(500).json({ mensagem: 'Erro ao atualizar o produto', erro: err.message });
    }
});


//delete
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await productsController.apagarProduto(id);
        res.status(200).json(resultado);
    } catch (err) {
        res.status(500).json({ mensagem: 'Erro ao remover o produto', erro: err.message });
    }
});


module.exports = router;