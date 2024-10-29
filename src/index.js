const express = require('express')
const morgan = require('morgan')
const app = express()
const PORT = process.env.PORT
const bodyParser = require('body-parser')
const productsController = require('./controllers/productsController')

app.use(bodyParser.json())
app.use(express.json())
app.use(morgan('tiny'))


//criar produto
//passar body [nome e preco]
app.post('/produto', (req, res) => {
    const { nome, preco } = req.body
    res.status(201).json(productsController.criarProduto(nome, preco))
})

//listar produtos
//passar nome na url   /produto?nome=
app.get('/produto', (req, res) => {
    const { nome } = req.query; // Captura 'nome' da query da URL
    const resultado = productsController.listarProduto(nome);
    res.json(resultado);
});

app.get('/produtos', (req, res) => {
    const produtos = productsController.listarTodosProdutos();
    res.json(produtos);
});

//editar
//passar id na url    /produto/1
app.put('/produto/:id', (req, res) => {
    const id = parseInt(req.params.id); // Captura o id da URL e converte para inteiro
    const dadosAtualizados = req.body;  // Captura os dados de atualização do body da requisição

    const resultado = productsController.editarProduto(id, dadosAtualizados);
    res.json(resultado);
});


//apagar produto
//passar na url /produto/1
app.delete('/produto/:id', (req, res) => {
    const id = parseInt(req.params.id); // Captura o id da URL e converte para inteiro
    const resultado = productsController.apagarProduto(id);
    res.json(resultado);
});



app.get('/', (req, res) => {
    res.json({ mensagem: 'sistemas funcionais!!' })
})

app.listen(PORT, () => {
    console.log(`rodando na porta ${PORT}`)
})